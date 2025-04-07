"use client";

import React from "react";

export default function Footer() {
  return (
    <footer className="bg-white border-t py-4 text-center text-sm text-gray-500">
      <div className="container mx-auto">
        LexiFlow &copy; {new Date().getFullYear()} - Aprenda idiomas sem
        esforço
      </div>
    </footer>
  );
}