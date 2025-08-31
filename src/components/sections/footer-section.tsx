"use client";

import { Icons } from "@/components/icons";
import { FlickeringGrid } from "@/components/ui/flickering-grid";
import { useMediaQuery } from "@/hooks/use-media-query";
import Link from "next/link";

export function FooterSection() {
  const tablet = useMediaQuery("(max-width: 1024px)");

  return (
    <footer id="footer" className="w-full pb-0 px-6">
      <div className="w-full bg-muted/30 border-t">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info - Keep existing logo */}
            <div className="space-y-4">
              <Link href="/" className="flex items-center gap-2">
                <Icons.logo className="size-8" />
                <p className="text-xl font-semibold text-primary">
                  Juggernot AI
                </p>
              </Link>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Dubai&apos;s leading enterprises trust us to turn AI ambition into
                operational excellence. When UAE adds AI to Cabinet in 2026,
                you&apos;ll already be ahead.
              </p>
              <div className="flex items-center gap-2 dark:hidden">
                <Icons.soc2 className="size-12" />
                <Icons.hipaa className="size-12" />
                <Icons.gdpr className="size-12" />
              </div>
              <div className="dark:flex items-center gap-2 hidden">
                <Icons.soc2Dark className="size-12" />
                <Icons.hipaaDark className="size-12" />
                <Icons.gdprDark className="size-12" />
              </div>
            </div>

            {/* Compliance & Certifications */}
            <div className="space-y-4">
              <h3 className="font-semibold text-primary">
                Compliance & Certifications
              </h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>UAE AI Charter Compliant</li>
                <li>DIFC Data Protection Certified</li>
                <li>ISO 27001 Information Security</li>
                <li>SOC 2 Type II Certified</li>
              </ul>
            </div>

            {/* Contact Information */}
            <div className="space-y-4">
              <h3 className="font-semibold text-primary">
                Contact Information
              </h3>
              <div className="space-y-3 text-sm text-muted-foreground">
                <div>
                  <p className="font-medium">Dubai Office</p>
                  <p>Business Bay, Dubai, UAE</p>
                  <p>Phone: [Your Phone]</p>
                  <p>
                    Email:{" "}
                    <a
                      href="mailto:enterprise@juggernotai.com"
                      className="hover:text-primary transition-colors"
                    >
                      enterprise@juggernotai.com
                    </a>
                  </p>
                </div>
                <div>
                  <p className="font-medium">Office Hours</p>
                  <p>Sunday - Thursday: 9:00 AM - 6:00 PM GST</p>
                  <p>24/7 Support for Active Clients</p>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h3 className="font-semibold text-primary">Quick Links</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <Link
                    href="/about"
                    className="hover:text-primary transition-colors"
                  >
                    About Juggernot AI
                  </Link>
                </li>
                <li>
                  <Link
                    href="/methodology"
                    className="hover:text-primary transition-colors"
                  >
                    Our Methodology
                  </Link>
                </li>
                <li>
                  <Link
                    href="/case-studies"
                    className="hover:text-primary transition-colors"
                  >
                    Case Studies
                  </Link>
                </li>
                <li>
                  <Link
                    href="/resources"
                    className="hover:text-primary transition-colors"
                  >
                    Enterprise Resources
                  </Link>
                </li>
                <li>
                  <Link
                    href="/careers"
                    className="hover:text-primary transition-colors"
                  >
                    Careers
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="hover:text-primary transition-colors"
                  >
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Legal Section */}
          <div className="mt-12 pt-8 border-t border-border">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
              <div className="flex flex-wrap gap-6 text-sm text-muted-foreground">
                <Link
                  href="/privacy"
                  className="hover:text-primary transition-colors"
                >
                  Privacy Policy
                </Link>
                <Link
                  href="/terms"
                  className="hover:text-primary transition-colors"
                >
                  Terms of Service
                </Link>
                <Link
                  href="/cookies"
                  className="hover:text-primary transition-colors"
                >
                  Cookie Policy
                </Link>
                <Link
                  href="/compliance"
                  className="hover:text-primary transition-colors"
                >
                  Compliance Standards
                </Link>
              </div>
              <p className="text-sm text-muted-foreground text-center md:text-right">
                © 2025 Juggernot AI. Transforming Dubai&apos;s Enterprises with
                Intelligent Innovation.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Background Grid with Tagline */}
      <div className="w-full h-48 md:h-64 relative mt-24 z-0">
        <div className="absolute inset-0 bg-gradient-to-t from-transparent to-background z-10 from-40%" />
        <div className="absolute inset-0 mx-6">
          <FlickeringGrid
            text={tablet ? "Juggernot AI" : "Juggernot AI"}
            fontSize={tablet ? 90 : 120}
            className="h-full w-full"
            squareSize={2}
            gridGap={tablet ? 2 : 3}
            color="#6B7280"
            maxOpacity={0.3}
            flickerChance={0.1}
          />
        </div>

        {/* New Tagline Text - Moved Up More */}
        <div className="absolute inset-0 z-20 flex items-start justify-center px-6 ">
          <div className="text-center max-w-4xl mx-auto">
            <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 font-medium leading-relaxed mb-3">
              Dubai&apos;s leading enterprises trust us to turn AI ambition into
              operational excellence.
            </p>
            <p className="text-base md:text-lg text-gray-600 dark:text-gray-400 font-medium">
              When UAE adds AI to Cabinet in 2026, you&apos;ll already be ahead.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
