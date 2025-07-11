import { useState, useEffect } from "react";
import { GamificationState, Badge } from "../types";
import { badgesData, projectsData } from "../lib/data";

const initialState: GamificationState = {
  xp: 0,
  level: 1,
  xpForNextLevel: 100,
  actionsTaken: {},
  unlockedBadges: [],
  visitedSections: [],
  viewedProjects: [],
  clickedGithubs: [],
  logoClicks: 0,
};

export const useGamification = () => {
  const [state, setState] = useState<GamificationState>(initialState);
  const [showBadgeNotification, setShowBadgeNotification] =
    useState<Badge | null>(null);

  // Load state from localStorage on component mount
  useEffect(() => {
    const savedState = localStorage.getItem("gamificationState");
    if (savedState) {
      setState(JSON.parse(savedState));
    } else {
      // First visit - award initial XP and badge
      addXp(10, "first-visit");
      unlockBadge("Apprentice Alchemist");
    }
  }, []);

  // Save state to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("gamificationState", JSON.stringify(state));
  }, [state]);

  // Add XP and check for level up
  const addXp = (points: number, actionId: string) => {
    if (state.actionsTaken[actionId]) return; // Prevent duplicate XP for same action

    setState((prevState) => {
      let newXp = prevState.xp + points;
      let newLevel = prevState.level;
      let newXpForNextLevel = prevState.xpForNextLevel;

      // Check for level up
      if (newXp >= prevState.xpForNextLevel) {
        newLevel++;
        newXp -= prevState.xpForNextLevel;
        newXpForNextLevel = Math.floor(prevState.xpForNextLevel * 1.5);
      }

      const newState = {
        ...prevState,
        xp: newXp,
        level: newLevel,
        xpForNextLevel: newXpForNextLevel,
        actionsTaken: {
          ...prevState.actionsTaken,
          [actionId]: true,
        },
      };

      return newState;
    });

    // Check for achievements after XP is added
    checkAchievements();
  };

  // Unlock a badge
  const unlockBadge = (badgeName: string) => {
    if (state.unlockedBadges.includes(badgeName)) return;

    setState((prevState) => ({
      ...prevState,
      unlockedBadges: [...prevState.unlockedBadges, badgeName],
    }));

    // Show notification
    const badge = badgesData[badgeName];
    if (badge) {
      setShowBadgeNotification(badge);
      setTimeout(() => {
        setShowBadgeNotification(null);
      }, 4000);
    }
  };

  // Track section visits
  const visitSection = (sectionId: string) => {
    if (state.visitedSections.includes(sectionId)) return;

    setState((prevState) => ({
      ...prevState,
      visitedSections: [...prevState.visitedSections, sectionId],
    }));

    addXp(5, `visit-section-${sectionId}`);
    checkAchievements();
  };

  // Track project views
  const viewProject = (projectId: string) => {
    if (state.viewedProjects.includes(projectId)) return;

    setState((prevState) => ({
      ...prevState,
      viewedProjects: [...prevState.viewedProjects, projectId],
    }));

    addXp(20, `view-project-${projectId}`);
    checkAchievements();
  };

  // Track GitHub link clicks
  const clickGithub = (projectId: string) => {
    if (state.clickedGithubs.includes(projectId)) return;

    setState((prevState) => ({
      ...prevState,
      clickedGithubs: [...prevState.clickedGithubs, projectId],
    }));

    addXp(30, `click-github-${projectId}`);
    checkAchievements();
  };

  // Track logo clicks (easter egg)
  const clickLogo = () => {
    setState((prevState) => ({
      ...prevState,
      logoClicks: prevState.logoClicks + 1,
    }));

    if (state.logoClicks + 1 === 5) {
      addXp(75, "easter-egg-logo");
      unlockBadge("Debug Master");
    }
  };

  // Check for achievements
  const checkAchievements = () => {
    // Full-Stack Navigator - visit all sections
    if (
      state.visitedSections.length >= 5 &&
      !state.unlockedBadges.includes("Full-Stack Navigator")
    ) {
      unlockBadge("Full-Stack Navigator");
    }

    // Code Reviewer - view 3+ projects
    if (
      state.viewedProjects.length >= 3 &&
      !state.unlockedBadges.includes("Code Reviewer")
    ) {
      unlockBadge("Code Reviewer");
    }

    // Senior Developer - view all projects
    if (
      state.viewedProjects.length === projectsData.length &&
      !state.unlockedBadges.includes("Senior Developer")
    ) {
      unlockBadge("Senior Developer");
    }

    // Open Source Contributor - click 2+ GitHub links
    if (
      state.clickedGithubs.length >= 2 &&
      !state.unlockedBadges.includes("Open Source Contributor")
    ) {
      unlockBadge("Open Source Contributor");
    }
  };

  // Submit contact form
  const submitContactForm = () => {
    addXp(100, "contact-submit");
    unlockBadge("Pull Request Merged");
  };

  return {
    state,
    addXp,
    unlockBadge,
    visitSection,
    viewProject,
    clickGithub,
    clickLogo,
    submitContactForm,
    showBadgeNotification,
  };
};
