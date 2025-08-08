"use client";

import { useEffect, useCallback, useRef, useState } from "react";
import { useRouter } from "next/navigation";

interface KeyboardShortcut {
  key: string;
  metaKey?: boolean;
  ctrlKey?: boolean;
  shiftKey?: boolean;
  altKey?: boolean;
  action: () => void;
  description: string;
  preventDefault?: boolean;
}

interface UseKeyboardShortcutsOptions {
  enabled?: boolean;
  onNavigate?: (path: string) => void;
  onShowHelp?: () => void;
}

export const useKeyboardShortcuts = (options: UseKeyboardShortcutsOptions = {}) => {
  const { enabled = true, onNavigate, onShowHelp } = options;
  const router = useRouter();
  const shortcutsRef = useRef<KeyboardShortcut[]>([]);
  const [isHelpOpen, setIsHelpOpen] = useState(false);

  const navigate = useCallback((path: string) => {
    if (onNavigate) {
      onNavigate(path);
    } else {
      router.push(path);
    }
  }, [router, onNavigate]);

  const defaultShortcuts: KeyboardShortcut[] = [
    {
      key: "h",
      description: "Navigate to Home",
      action: () => navigate("/"),
    },
    {
      key: "l",
      description: "Navigate to Learn",
      action: () => navigate("/learn"),
    },
    {
      key: "c",
      description: "Navigate to Chat History",
      action: () => navigate("/chat-history"),
    },
    {
      key: "p",
      description: "Navigate to Profile",
      action: () => navigate("/profile"),
    },
    {
      key: "/",
      description: "Focus search",
      action: () => {
        const searchInput = document.querySelector('input[type="search"], input[placeholder*="search" i], input[placeholder*="buscar" i]') as HTMLInputElement;
        if (searchInput) {
          searchInput.focus();
          searchInput.select();
        }
      },
      preventDefault: true,
    },
    {
      key: "?",
      shiftKey: true,
      description: "Show help",
      action: () => {
        if (onShowHelp) {
          onShowHelp();
        } else {
          setIsHelpOpen(!isHelpOpen);
        }
      },
    },
    {
      key: "k",
      metaKey: true,
      description: "Open command palette",
      action: () => {
        // Trigger command palette or search modal
        const commandPalette = document.querySelector('[data-command-palette]') as HTMLElement;
        if (commandPalette) {
          commandPalette.click();
        }
      },
      preventDefault: true,
    },
    {
      key: ",",
      metaKey: true,
      description: "Open settings",
      action: () => navigate("/settings"),
      preventDefault: true,
    },
    {
      key: "Escape",
      description: "Close modals/overlays",
      action: () => {
        // Close any open modals, dropdowns, or overlays
        const closeButtons = document.querySelectorAll('[data-close], .ant-modal-close, .ant-drawer-close');
        const lastCloseButton = closeButtons[closeButtons.length - 1] as HTMLElement;
        if (lastCloseButton) {
          lastCloseButton.click();
        }
      },
    },
    {
      key: "n",
      metaKey: true,
      description: "New item/session",
      action: () => {
        // Trigger new item creation
        const newButton = document.querySelector('[data-new], [data-create]') as HTMLElement;
        if (newButton) {
          newButton.click();
        }
      },
      preventDefault: true,
    },
  ];

  const handleKeyDown = useCallback((event: KeyboardEvent) => {
    if (!enabled) return;

    // Don't trigger shortcuts when user is typing in inputs
    const target = event.target as HTMLElement;
    const isInputFocused = target.tagName === 'INPUT' || 
                          target.tagName === 'TEXTAREA' || 
                          target.contentEditable === 'true' ||
                          target.closest('[contenteditable="true"]');

    // Allow certain shortcuts even when input is focused
    const allowedInInputs = ['Escape', 'k'];
    if (isInputFocused && !allowedInInputs.includes(event.key)) {
      return;
    }

    const shortcuts = shortcutsRef.current;
    
    for (const shortcut of shortcuts) {
      const keyMatches = event.key.toLowerCase() === shortcut.key.toLowerCase();
      const metaMatches = !!shortcut.metaKey === !!event.metaKey;
      const ctrlMatches = !!shortcut.ctrlKey === !!event.ctrlKey;
      const shiftMatches = !!shortcut.shiftKey === !!event.shiftKey;
      const altMatches = !!shortcut.altKey === !!event.altKey;

      if (keyMatches && metaMatches && ctrlMatches && shiftMatches && altMatches) {
        if (shortcut.preventDefault) {
          event.preventDefault();
        }
        shortcut.action();
        break;
      }
    }
  }, [enabled]);

  useEffect(() => {
    shortcutsRef.current = defaultShortcuts;
  }, [navigate]);

  useEffect(() => {
    if (!enabled) return;

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown, enabled]);

  const addShortcut = useCallback((shortcut: KeyboardShortcut) => {
    shortcutsRef.current = [...shortcutsRef.current, shortcut];
  }, []);

  const removeShortcut = useCallback((key: string) => {
    shortcutsRef.current = shortcutsRef.current.filter(s => s.key !== key);
  }, []);

  const getShortcuts = useCallback(() => {
    return shortcutsRef.current;
  }, []);

  return {
    addShortcut,
    removeShortcut,
    getShortcuts,
    isHelpOpen,
    setIsHelpOpen,
  };
};

export default useKeyboardShortcuts;
