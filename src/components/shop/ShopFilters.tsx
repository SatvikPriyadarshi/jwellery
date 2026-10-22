"use client";

import { useState, useEffect, useRef } from "react";
import { CATEGORIES, STONE_TYPES, METAL_COLORS } from "@/data/products";

interface ShopFiltersProps {
  selectedCategory: string;
  onSelectCategory: (cat: string) => void;
  selectedStone: string;
  onSelectStone: (stone: string) => void;
  selectedMetal: string;
  onSelectMetal: (metal: string) => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
  sortBy: string;
  onSortChange: (sort: string) => void;
  totalResults: number;
  categoryCounts: Record<string, number>;
  onClearAll: () => void;
  hasActiveFilters: boolean;
}

export default function ShopFilters({
  selectedCategory,
  onSelectCategory,
  selectedStone,
  onSelectStone,
  selectedMetal,
  onSelectMetal,
  searchQuery,
  onSearchChange,
  sortBy,
  onSortChange,
  totalResults,
  categoryCounts,
  onClearAll,
  hasActiveFilters,
}: ShopFiltersProps) {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const searchInputRef = useRef<HTMLInputElement>(null);

  // Calculate active filter count (excluding default category)
  const activeFilterCount =
    (selectedCategory !== "All Jewellery" ? 1 : 0) +
    (selectedStone !== "All Gemstones" ? 1 : 0) +
    (selectedMetal !== "All Metals" ? 1 : 0) +
    (sortBy !== "featured" ? 1 : 0) +
    (searchQuery.trim() ? 1 : 0);

  // Manage body scroll lock and escape key for mobile drawer
  useEffect(() => {
    if (isDrawerOpen) {
      document.body.style.overflow = "hidden";
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === "Escape") {
          setIsDrawerOpen(false);
        }
      };
      window.addEventListener("keydown", handleKeyDown);
      return () => {
        document.body.style.overflow = "";
        window.removeEventListener("keydown", handleKeyDown);
      };
    } else {
      document.body.style.overflow = "";
    }
  }, [isDrawerOpen]);

  return (
    <div className="shop-filters-wrapper">
      {/* 1. Category Navigation Rail (Desktop wrap, Mobile horizontal scroll) */}
      <nav
        className="shop-categories-nav"
        aria-label="Filter by jewellery category"
      >
        <div className="shop-categories-rail">
          {CATEGORIES.map((cat) => {
            const isActive = selectedCategory === cat;
            const count = categoryCounts[cat] || 0;

            return (
              <button
                key={cat}
                type="button"
                onClick={() => onSelectCategory(cat)}
                className={`shop-cat-btn ${isActive ? "is-active" : ""}`}
                aria-pressed={isActive}
              >
                <span>{cat}</span>
                <span className="shop-cat-btn__count">{count}</span>
              </button>
            );
          })}
        </div>
      </nav>

      {/* 2. Desktop Filter Toolbar */}
      <div className="shop-toolbar shop-toolbar--desktop">
        <div className="shop-toolbar__left">
          {/* Search Box */}
          <div className="shop-search-box">
            <span className="shop-search-icon" aria-hidden="true">
              <svg
                width="15"
                height="15"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.75"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
            </span>

            <input
              ref={searchInputRef}
              type="text"
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              placeholder="Search pieces, stones, styles..."
              className="shop-search-input"
              aria-label="Search jewellery collection"
            />

            {searchQuery && (
              <button
                type="button"
                onClick={() => {
                  onSearchChange("");
                  searchInputRef.current?.focus();
                }}
                className="shop-search-clear"
                aria-label="Clear search query"
              >
                <svg
                  width="13"
                  height="13"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
            )}
          </div>

          {/* Gemstone Type Selector */}
          <select
            value={selectedStone}
            onChange={(e) => onSelectStone(e.target.value)}
            className="shop-filter-select"
            aria-label="Filter by gemstone"
          >
            {STONE_TYPES.map((st) => (
              <option key={st} value={st}>
                {st}
              </option>
            ))}
          </select>

          {/* Metal Color Selector */}
          <select
            value={selectedMetal}
            onChange={(e) => onSelectMetal(e.target.value)}
            className="shop-filter-select"
            aria-label="Filter by metal"
          >
            {METAL_COLORS.map((m) => (
              <option key={m} value={m}>
                {m}
              </option>
            ))}
          </select>
        </div>

        <div className="shop-toolbar__right">
          {/* Sorting Dropdown */}
          <select
            value={sortBy}
            onChange={(e) => onSortChange(e.target.value)}
            className="shop-filter-select"
            aria-label="Sort collection"
          >
            <option value="featured">Sort: Featured</option>
            <option value="name-asc">Sort: Name (A–Z)</option>
            <option value="name-desc">Sort: Name (Z–A)</option>
          </select>

          {/* Results Count */}
          <span className="shop-count-label">
            {totalResults} {totalResults === 1 ? "Piece" : "Pieces"}
          </span>
        </div>
      </div>

      {/* 3. Mobile Dedicated Utility Bar */}
      <div className="shop-toolbar shop-toolbar--mobile">
        <div className="shop-mobile-bar">
          {/* Compact Mobile Search */}
          <div className="shop-search-box shop-search-box--mobile">
            <span className="shop-search-icon" aria-hidden="true">
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.75"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
            </span>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              placeholder="Search collection..."
              className="shop-search-input"
              aria-label="Search collection"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => onSearchChange("")}
                className="shop-search-clear"
                aria-label="Clear search"
              >
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
            )}
          </div>

          {/* Mobile Filter & Sort Drawer Trigger */}
          <button
            type="button"
            onClick={() => setIsDrawerOpen(true)}
            className="shop-mobile-filter-trigger"
            aria-expanded={isDrawerOpen}
            aria-controls="mobile-filter-drawer"
          >
            <svg
              width="15"
              height="15"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.75"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <line x1="4" y1="21" x2="4" y2="14" />
              <line x1="4" y1="10" x2="4" y2="3" />
              <line x1="12" y1="21" x2="12" y2="12" />
              <line x1="12" y1="8" x2="12" y2="3" />
              <line x1="20" y1="21" x2="20" y2="16" />
              <line x1="20" y1="12" x2="20" y2="3" />
              <line x1="1" y1="14" x2="7" y2="14" />
              <line x1="9" y1="8" x2="15" y2="8" />
              <line x1="17" y1="16" x2="23" y2="16" />
            </svg>
            <span>Filter</span>
            {activeFilterCount > 0 && (
              <span className="shop-mobile-badge">{activeFilterCount}</span>
            )}
          </button>
        </div>

        {/* Mobile Piece Counter Line */}
        <div className="shop-mobile-counter-row">
          <span className="shop-count-label">
            {totalResults} {totalResults === 1 ? "Piece" : "Pieces"} in catalog
          </span>
          {hasActiveFilters && (
            <button
              type="button"
              onClick={onClearAll}
              className="shop-clear-all-btn"
            >
              Reset Filters
            </button>
          )}
        </div>
      </div>

      {/* 4. Active Filters Chips (Desktop & Mobile) */}
      {hasActiveFilters && (
        <div className="shop-active-chips" aria-label="Active filters">
          {selectedCategory !== "All Jewellery" && (
            <span className="shop-chip">
              Category: {selectedCategory}
              <button
                type="button"
                onClick={() => onSelectCategory("All Jewellery")}
                className="shop-chip-clear"
                aria-label={`Remove ${selectedCategory} filter`}
              >
                &times;
              </button>
            </span>
          )}

          {selectedStone !== "All Gemstones" && (
            <span className="shop-chip">
              Stone: {selectedStone}
              <button
                type="button"
                onClick={() => onSelectStone("All Gemstones")}
                className="shop-chip-clear"
                aria-label={`Remove ${selectedStone} filter`}
              >
                &times;
              </button>
            </span>
          )}

          {selectedMetal !== "All Metals" && (
            <span className="shop-chip">
              Metal: {selectedMetal}
              <button
                type="button"
                onClick={() => onSelectMetal("All Metals")}
                className="shop-chip-clear"
                aria-label={`Remove ${selectedMetal} filter`}
              >
                &times;
              </button>
            </span>
          )}

          {searchQuery && (
            <span className="shop-chip">
              &ldquo;{searchQuery}&rdquo;
              <button
                type="button"
                onClick={() => onSearchChange("")}
                className="shop-chip-clear"
                aria-label="Clear search filter"
              >
                &times;
              </button>
            </span>
          )}

          <button
            type="button"
            onClick={onClearAll}
            className="shop-clear-all-btn"
          >
            Clear All
          </button>
        </div>
      )}

      {/* 5. Mobile Filter & Sort Slide-up Drawer */}
      {isDrawerOpen && (
        <div
          id="mobile-filter-drawer"
          className="shop-drawer-overlay"
          role="dialog"
          aria-modal="true"
          aria-label="Filter and Sort Collection"
          onClick={(e) => {
            if (e.target === e.currentTarget) setIsDrawerOpen(false);
          }}
        >
          <div className="shop-drawer-content">
            {/* Drawer Header with Handle */}
            <div className="shop-drawer-handle" aria-hidden="true" />
            <div className="shop-drawer-header">
              <div className="shop-drawer-title-group">
                <h3 className="shop-drawer-title">Filter &amp; Refine</h3>
                <span className="shop-drawer-subtitle">
                  {totalResults} {totalResults === 1 ? "Piece" : "Pieces"} available
                </span>
              </div>
              <button
                type="button"
                onClick={() => setIsDrawerOpen(false)}
                className="shop-drawer-close"
                aria-label="Close filter drawer"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.75"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
            </div>

            {/* Drawer Scrollable Body */}
            <div className="shop-drawer-body">
              {/* Category Section */}
              <div className="shop-drawer-section">
                <h4 className="shop-drawer-section-title">Jewellery Category</h4>
                <div className="shop-drawer-chips-grid">
                  {CATEGORIES.map((cat) => {
                    const isActive = selectedCategory === cat;
                    const count = categoryCounts[cat] || 0;
                    return (
                      <button
                        key={cat}
                        type="button"
                        onClick={() => onSelectCategory(cat)}
                        className={`shop-drawer-chip ${
                          isActive ? "is-active" : ""
                        }`}
                      >
                        <span>{cat}</span>
                        <span className="shop-drawer-chip-count">{count}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Gemstone Section */}
              <div className="shop-drawer-section">
                <h4 className="shop-drawer-section-title">Gemstone</h4>
                <div className="shop-drawer-chips-grid">
                  {STONE_TYPES.map((st) => {
                    const isActive = selectedStone === st;
                    return (
                      <button
                        key={st}
                        type="button"
                        onClick={() => onSelectStone(st)}
                        className={`shop-drawer-chip ${
                          isActive ? "is-active" : ""
                        }`}
                      >
                        {st}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Metal Section */}
              <div className="shop-drawer-section">
                <h4 className="shop-drawer-section-title">Precious Metal</h4>
                <div className="shop-drawer-chips-grid">
                  {METAL_COLORS.map((m) => {
                    const isActive = selectedMetal === m;
                    return (
                      <button
                        key={m}
                        type="button"
                        onClick={() => onSelectMetal(m)}
                        className={`shop-drawer-chip ${
                          isActive ? "is-active" : ""
                        }`}
                      >
                        {m}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Sort Section */}
              <div className="shop-drawer-section">
                <h4 className="shop-drawer-section-title">Sort Collection</h4>
                <div className="shop-drawer-chips-grid">
                  {[
                    { value: "featured", label: "Featured Atelier" },
                    { value: "name-asc", label: "Name: A to Z" },
                    { value: "name-desc", label: "Name: Z to A" },
                  ].map((s) => {
                    const isActive = sortBy === s.value;
                    return (
                      <button
                        key={s.value}
                        type="button"
                        onClick={() => onSortChange(s.value)}
                        className={`shop-drawer-chip ${
                          isActive ? "is-active" : ""
                        }`}
                      >
                        {s.label}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Drawer Sticky Footer */}
            <div className="shop-drawer-footer">
              <button
                type="button"
                onClick={onClearAll}
                className="shop-drawer-reset-btn"
                disabled={!hasActiveFilters}
              >
                Reset
              </button>
              <button
                type="button"
                onClick={() => setIsDrawerOpen(false)}
                className="shop-drawer-apply-btn"
              >
                View {totalResults} {totalResults === 1 ? "Piece" : "Pieces"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
