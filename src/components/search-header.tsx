"use client";

import React from "react";
import { Search, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { useRouter } from "next/navigation";

interface SearchHeaderProps {
  location: string;
}

const SearchHeader: React.FC<SearchHeaderProps> = ({ location }) => {
  const router = useRouter();

  return (
    <header className="bg-background border-b border-border px-4 py-3">
      <div className="flex items-center justify-between max-w-none">
        {/* Left Section */}
        <div className="flex items-center space-x-6">
          {/* Back Button */}
          <Button
            variant="ghost"
            size="sm"
            onClick={() => router.back()}
            className="flex items-center space-x-2"
          >
            <ArrowLeft className="h-4 w-4" />
            <span className="hidden sm:inline">All Results</span>
          </Button>

          {/* Brand */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="bg-primary text-primary-foreground px-3 py-1 rounded font-bold text-sm">
              REVASI
            </div>
            <span className="text-muted-foreground hidden sm:inline">
              {location || "Amsterdam, ..."}
            </span>
          </Link>
        </div>

        {/* Center Section - Search */}
        <div className="flex-1 max-w-md mx-8">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Search restaurants, cuisines, etc."
              className="pl-10 bg-muted/50 border-0 focus:bg-background"
            />
          </div>
        </div>

        {/* Right Section */}
        <div className="flex items-center space-x-3">
          <Button variant="outline" size="sm">
            Log in
          </Button>
        </div>
      </div>
    </header>
  );
};

export default SearchHeader; 