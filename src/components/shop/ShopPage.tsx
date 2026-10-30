"use client";

import { useMemo, useState, useRef, useEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import PRODUCTS, { type Product } from "@/data/products";
import ShopFilters from "./ShopFilters";
import ProductCard from "./ProductCard";
import ProductQuickView from "./ProductQuickView";
import "./ShopPage.css";

const ITEMS_PER_PAGE = 24;

export default function ShopPage() {
  const rootRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  // Filter States
  const [selectedCategory, setSelectedCategory] = useState<string>("All Jewellery");
  const [selectedStone, setSelectedStone] = useState<string>("All Gemstones");
  const [selectedMetal, setSelectedMetal] = useState<string>("All Metals");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [sortBy, setSortBy] = useState<string>("featured");
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null);

  // Compute category counts
  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = { "All Jewellery": PRODUCTS.length };
    for (const p of PRODUCTS) {
      counts[p.category] = (counts[p.category] || 0) + 1;
    }
    return counts;
  }, []);

  // Filter & Search Logic
  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((product) => {
      // 1. Category filter
      if (
        selectedCategory !== "All Jewellery" &&
        product.category !== selectedCategory
      ) {
        return false;
      }

      // 2. Stone filter
      if (selectedStone !== "All Gemstones") {
        const queryStone = selectedStone.toLowerCase();
        const stoneAttr = product.visualAttributes.visibleStone.toLowerCase();
        if (!stoneAttr.includes(queryStone)) {
          return false;
        }
      }

      // 3. Metal filter
      if (selectedMetal !== "All Metals") {
        const queryMetal = selectedMetal.toLowerCase();
        const metalAttr = product.visualAttributes.apparentMetalColor.toLowerCase();
        if (!metalAttr.includes(queryMetal)) {
          return false;
        }
      }

      // 4. Search query
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase().trim();
        const matchName = product.name.toLowerCase().includes(q);
        const matchCategory = product.category.toLowerCase().includes(q);
        const matchStone = product.visualAttributes.visibleStone
          .toLowerCase()
          .includes(q);
        const matchMetal = product.visualAttributes.apparentMetalColor
          .toLowerCase()
          .includes(q);
        const matchDesign = product.visualAttributes.design
          .toLowerCase()
          .includes(q);
        const matchDesc = product.shortDescription.toLowerCase().includes(q);

        if (
          !matchName &&
          !matchCategory &&
          !matchStone &&
          !matchMetal &&
          !matchDesign &&
          !matchDesc
        ) {
          return false;
        }
      }

      return true;
    });
  }, [selectedCategory, selectedStone, selectedMetal, searchQuery]);

  // Sorting Logic
  const sortedProducts = useMemo(() => {
    const list = [...filteredProducts];
    if (sortBy === "name-asc") {
      list.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortBy === "name-desc") {
      list.sort((a, b) => b.name.localeCompare(a.name));
    } else {
      // Featured first, then stable ID order
      list.sort((a, b) => {
        if (a.featured && !b.featured) return -1;
        if (!a.featured && b.featured) return 1;
        return a.id.localeCompare(b.id);
      });
    }
    return list;
  }, [filteredProducts, sortBy]);

  // Reset to page 1 on filter or search change
  useEffect(() => {
    setCurrentPage(1);
  }, [selectedCategory, selectedStone, selectedMetal, searchQuery, sortBy]);

  // Pagination calculation
  const totalPages = Math.ceil(sortedProducts.length / ITEMS_PER_PAGE);
  const paginatedProducts = useMemo(() => {
    const start = (currentPage - 1) * ITEMS_PER_PAGE;
    return sortedProducts.slice(start, start + ITEMS_PER_PAGE);
  }, [sortedProducts, currentPage]);

  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
    if (gridRef.current) {
      gridRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const handleClearAll = () => {
    setSelectedCategory("All Jewellery");
    setSelectedStone("All Gemstones");
    setSelectedMetal("All Metals");
    setSearchQuery("");
    setSortBy("featured");
    setCurrentPage(1);
  };

  const hasActiveFilters =
    selectedCategory !== "All Jewellery" ||
    selectedStone !== "All Gemstones" ||
    selectedMetal !== "All Metals" ||
    searchQuery.trim().length > 0;

  // GSAP Entrance Animations
  useGSAP(
    () => {
      const root = rootRef.current;
      if (!root) return;

      const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (reduce) return;

      const cards = root.querySelectorAll(".prod-card");
      if (cards.length > 0) {
        gsap.fromTo(
          cards,
          { autoAlpha: 0, y: 16 },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.45,
            stagger: 0.03,
            ease: "power2.out",
          }
        );
      }
    },
    {
      dependencies: [currentPage, selectedCategory, selectedStone, selectedMetal, sortBy],
      scope: rootRef,
    }
  );

  return (
    <div ref={rootRef} className="shop-main-canvas">
      <div className="shop-container">
        {/* Collection Filter & Search Toolbar */}
        <ShopFilters
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
          selectedStone={selectedStone}
          onSelectStone={setSelectedStone}
          selectedMetal={selectedMetal}
          onSelectMetal={setSelectedMetal}
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          sortBy={sortBy}
          onSortChange={setSortBy}
          totalResults={sortedProducts.length}
          categoryCounts={categoryCounts}
          onClearAll={handleClearAll}
          hasActiveFilters={hasActiveFilters}
        />

        {/* Product Grid or Empty State */}
        <div ref={gridRef} id="products-grid" className="pt-1 scroll-mt-20">
          {paginatedProducts.length > 0 ? (
            <>
              <div className="shop-grid" role="list">
                {paginatedProducts.map((product, idx) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    onQuickView={(p) => setQuickViewProduct(p)}
                    priority={idx < 4}
                  />
                ))}
              </div>

              {/* Responsive Pagination Controls */}
              {totalPages > 1 && (
                <div className="shop-pagination-wrap">
                  {/* Desktop Pagination */}
                  <nav
                    className="shop-pagination shop-pagination--desktop"
                    aria-label="Collection desktop pagination"
                  >
                    <button
                      type="button"
                      onClick={() => handlePageChange(currentPage - 1)}
                      disabled={currentPage === 1}
                      className="shop-page-btn"
                      aria-label="Previous page"
                    >
                      Prev
                    </button>

                    {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                      (page) => {
                        // Only show adjacent pages if total pages > 8
                        if (
                          totalPages > 8 &&
                          Math.abs(page - currentPage) > 2 &&
                          page !== 1 &&
                          page !== totalPages
                        ) {
                          if (
                            page === currentPage - 3 ||
                            page === currentPage + 3
                          ) {
                            return (
                              <span
                                key={page}
                                className="px-2 text-stone-400 font-sans text-xs"
                              >
                                &hellip;
                              </span>
                            );
                          }
                          return null;
                        }

                        return (
                          <button
                            key={page}
                            type="button"
                            onClick={() => handlePageChange(page)}
                            className={`shop-page-btn ${
                              currentPage === page ? "is-active" : ""
                            }`}
                            aria-current={currentPage === page ? "page" : undefined}
                            aria-label={`Page ${page}`}
                          >
                            {page}
                          </button>
                        );
                      }
                    )}

                    <button
                      type="button"
                      onClick={() => handlePageChange(currentPage + 1)}
                      disabled={currentPage === totalPages}
                      className="shop-page-btn"
                      aria-label="Next page"
                    >
                      Next
                    </button>
                  </nav>

                  {/* Mobile Pagination Bar */}
                  <nav
                    className="shop-pagination shop-pagination--mobile"
                    aria-label="Collection mobile pagination"
                  >
                    <button
                      type="button"
                      onClick={() => handlePageChange(currentPage - 1)}
                      disabled={currentPage === 1}
                      className="shop-page-btn shop-page-btn--arrow"
                      aria-label="Previous page"
                    >
                      Previous
                    </button>

                    <span className="shop-pagination__mobile-indicator">
                      Page <strong>{currentPage}</strong> of {totalPages}
                    </span>

                    <button
                      type="button"
                      onClick={() => handlePageChange(currentPage + 1)}
                      disabled={currentPage === totalPages}
                      className="shop-page-btn shop-page-btn--arrow"
                      aria-label="Next page"
                    >
                      Next
                    </button>
                  </nav>
                </div>
              )}
            </>
          ) : (
            <div className="shop-empty-state" role="status">
              <div className="shop-empty-glyph" aria-hidden="true">
                <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.2">
                  <polygon points="12 2 2 9 12 22 22 9 12 2" />
                  <polyline points="2 9 12 14 22 9" />
                  <line x1="12" y1="2" x2="12" y2="14" />
                </svg>
              </div>
              <h3 className="shop-empty-title">No Pieces Found</h3>
              <p className="shop-empty-desc">
                We could not find any jewellery pieces matching your current
                filter or search query.
              </p>
              <button
                type="button"
                onClick={handleClearAll}
                className="shop-reset-btn"
              >
                Reset All Filters
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Accessible Quick View Dialog */}
      <ProductQuickView
        product={quickViewProduct}
        onClose={() => setQuickViewProduct(null)}
      />
    </div>
  );
}
