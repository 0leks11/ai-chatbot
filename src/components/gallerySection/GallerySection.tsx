// src/components/GallerySection/GallerySection.tsx
import React, { useState } from "react";
import VesselCard from "./VesselCard";
import { vesselList } from "../../data/vesselList";
import RefreshableGallerySection from "./RefreshableGallerySection";
import GalleryCarousel from "./GalleryCarousel";
import { Collapsible } from "../resumeSection/Collapsible";

const GallerySection: React.FC = () => {
  const [refreshKey, setRefreshKey] = useState(0);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleRefresh = () => {
    setIsRefreshing(true);
    setError(null);
    setRefreshKey((prevKey) => prevKey + 1);

    setTimeout(() => {
      setIsRefreshing(false);
    }, 1000);
  };

  const cardWidth = 350;
  const gap = 16;
  const autoScrollDelay = 2000;
  const resumeDelay = 3000;

  return (
    <section className="gallery-section container mx-auto px-4 py-8">
      <div className="flex flex-col space-y-0">
        <div className="flex flex-row items-start space-x-4">
          <RefreshableGallerySection
            onRefresh={handleRefresh}
            isRefreshing={isRefreshing}
          />
          <Collapsible
            button={
              <p className="text-sm px-3 py-1">
                This section describes its components and the technologies used,
                as well as why they are positioned here.
              </p>
            }
            content={
              <div className="text-base font-medium px-3 py-1">
                <p className=" py-2">
                  In this section, I developed a reusable component that
                  elegantly handles and displays data for each vessel within a
                  gallery. Each card in the gallery showcases both static and
                  dynamic information about the vessels. Static details include
                  the vessel’s name, owner, port of registry, flag, and type,
                  providing essential background. Meanwhile, dynamic data offers
                  real-time updates on the vessel’s course, speed, and current
                  position, ensuring that users have access to the most recent
                  information.
                </p>
                <p className=" py-2">
                  Data flows seamlessly through AIS (Automatic Identification
                  System) antennas installed on each vessel. These antennas
                  transmit information either to nearby shore-based AIS stations
                  along the coastline or directly to satellites. Our service
                  leverages the shore stations, offering free access by relying
                  on a 200-kilometer reception zone. This means that while the
                  system efficiently captures vessel data within this range,
                  signals may occasionally drop if a vessel moves beyond the
                  coverage area. Although alternative satellite-based services
                  are available, they typically come with additional costs.
                  <a
                    href="https://aisstream.io/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-indigo-600 font-semibold hover:text-indigo-800 no-underline"
                  >
                    aisstream.io
                  </a>
                </p>
                <p className=" py-2">
                  To ensure data persistence and reliability, all incoming
                  information is stored in a SQLite database hosted on the
                  same server. When users reload the page, the latest data
                  remains intact, populating the vessel cards without any loss.
                  This persistence guarantees that users always see up-to-date
                  information even after refreshing. Each vessel card also
                  features a timestamp at the bottom, indicating how recently a
                  signal was received, providing users with a clear sense of the
                  data’s freshness.
                </p>
                <p className=" py-2">
                  Real-time updates are a cornerstone of this system. When new,
                  relevant information arrives, it is instantly pushed to the
                  interface via web sockets, replacing outdated data on the
                  vessel cards in real time. Simultaneously, the database is
                  updated with the latest information, maintaining consistency
                  and accuracy across the platform. This dynamic interaction
                  between data acquisition, storage, and real-time updates
                  ensures that users receive a reliable and comprehensive
                  overview of vessel movements without incurring extra costs
                  associated with satellite data services.
                </p>
              </div>
            }
          />
        </div>
        <div className="relative">
          {error && (
            <div className="bg-red-200 text-red-800 px-4 py-2 rounded shadow mb-1">
              {error}
            </div>
          )}
          <GalleryCarousel
            cardWidth={cardWidth}
            gap={gap}
            autoScrollDelay={autoScrollDelay}
            resumeDelay={resumeDelay}
            key={refreshKey}
          >
            {vesselList.map((vessel) => (
              <VesselCard key={vessel.imoNumber} vessel={vessel} />
            ))}
          </GalleryCarousel>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
