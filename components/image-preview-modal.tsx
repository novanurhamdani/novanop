"use client";

import { Dialog, DialogContent } from "@/components/ui/dialog";
import Image from "next/image";

interface ImagePreviewModalProps {
  isOpen: boolean;
  onClose: () => void;
  imageUrl: string;
  alt: string;
}

export function ImagePreviewModal({
  isOpen,
  onClose,
  imageUrl,
  alt,
}: ImagePreviewModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-[90vw] max-h-[90vh] p-0 bg-transparent border-0">
        <div className="relative w-full h-full p-2">
          <Image
            src={imageUrl}
            alt={alt}
            width={1200}
            height={800}
            className="w-full h-full object-contain rounded-lg"
          />
        </div>
      </DialogContent>
    </Dialog>
  );
}
