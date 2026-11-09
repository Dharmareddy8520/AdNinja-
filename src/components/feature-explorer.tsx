"use client";

import { useState } from "react";

const features = [
  {
    id: "filter",
    number: "01",
    title: "Network filtering",
    tagline: "A quieter start to every page.",
    description:
      "Locally packaged rules filter supported ad and tracker requests before they load.",
    label: "REQUEST CONTROL",
  },
  {
    id: "cleanup",
    number: "02",
    title: "Page cleanup",
    tagline: "Keep the content in view.",
    description:
      "Automatic cleanup hides supported advertising elements on a page.",
    label: "PAGE CONTROL",
  },
  {
    id: "picker",
    number: "03",
    title: "Element picker",
    tagline: "Make a page feel like yours.",
    description:
      "Select an unwanted element and create a local rule to hide it.",
    label: "PERSONAL CONTROL",
  },
  {
    id: "sites",
    number: "04",
    title: "Website controls",
    tagline: "Adapt when a site needs it.",
    description:
      "Site-specific controls help when filtering interferes with a page.",
    label: "SITE CONTROL",
  },
] as const;

export function FeatureExplorer() {
  const [selected, setSelected] =
    useState<(typeof features)[number]["id"]>("filter");
  const active = features.find((feature) => feature.id === selected)!;

  return (
    <div className="home-explorer">
      <div className="home-explorer-nav" aria-label="Explore AdNinja features">
        {features.map((feature) => (
          <button
            className={
              selected === feature.id
                ? "home-explorer-option active"
                : "home-explorer-option"
            }
            key={feature.id}
            type="button"
            aria-pressed={selected === feature.id}
            onClick={() => setSelected(feature.id)}
          >
            <span>{feature.number}</span>
            <strong>{feature.title}</strong>
            <span aria-hidden="true">↗</span>
          </button>
        ))}
      </div>
      <div className="home-explorer-panel" aria-live="polite">
        <div className="home-explorer-copy">
          <p className="home-explorer-label">{active.label}</p>
          <h3>{active.tagline}</h3>
          <p>{active.description}</p>
          <span className="home-explorer-counter">{active.number} / 04</span>
        </div>
        <div
          className={`home-explorer-art home-explorer-art-${active.id}`}
          aria-hidden="true"
        >
          <div className="home-demo-window">
            <div className="home-demo-top">
              <span>adninja / preview</span>
              <span>● ● ●</span>
            </div>
            <div className="home-demo-main">
              <span className="home-demo-line long" />
              <span className="home-demo-line medium" />
              <span className="home-demo-line short" />
              <div className="home-demo-target">
                <span>
                  {selected === "filter"
                    ? "Request"
                    : selected === "cleanup"
                      ? "On-page clutter"
                      : selected === "picker"
                        ? "Selected element"
                        : "This website"}
                </span>
                <b>{selected === "sites" ? "◉" : "×"}</b>
              </div>
              <span className="home-demo-line medium" />
            </div>
          </div>
          <div className="home-demo-badge">
            {selected === "sites"
              ? "Site settings"
              : selected === "picker"
                ? "Choose an element"
                : selected === "cleanup"
                  ? "Clear the view"
                  : "Filter supported requests"}
          </div>
        </div>
      </div>
    </div>
  );
}
