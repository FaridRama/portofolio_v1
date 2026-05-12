import React from "react";
import { Link } from "react-router-dom";
import { ExternalLink, ArrowRight } from "lucide-react";
import { toSlug } from "../utils/slug";

const CardProject = ({ Img, Title, Description, Link: ProjectLink, id }) => {
  const handleLiveDemo = (e) => {
    if (!ProjectLink) {
      console.log("ProjectLink kosong");
      e.preventDefault();
      alert("Live demo link is not available");
    }
  };

  const handleDetails = (e) => {
    if (!id) {
      console.log("ID kosong");
      e.preventDefault();
      alert("Project details are not available");
    }
  };

  return (
    <div className="group relative w-full">
      {/* Background card menggunakan zinc dan hitam murni */}
      <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-zinc-900/90 to-black/90 backdrop-blur-lg border border-white/10 shadow-2xl transition-all duration-300 hover:shadow-white/10">
        
        {/* Overlay gradient putih/abu transparan */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-500/5 via-gray-400/5 to-white/5 opacity-50 group-hover:opacity-100 transition-opacity duration-300"></div>

        <div className="relative p-5 z-10">
          <div className="relative overflow-hidden rounded-lg">
            <img
              src={Img}
              alt={Title}
              className="w-full h-full object-cover aspect-[16/8] transform group-hover:scale-105 transition-transform duration-500 grayscale-[20%] group-hover:grayscale-0"
            />
          </div>

          <div className="mt-4 space-y-3">
            {/* Judul dengan gradasi abu-abu ke putih */}
            <h3 className="text-xl font-semibold bg-gradient-to-r from-gray-300 via-gray-100 to-white bg-clip-text text-transparent">
              {Title}
            </h3>

            {/* Deskripsi abu-abu */}
            <p className="text-gray-400 text-sm leading-relaxed line-clamp-2">
              {Description}
            </p>

            <div className="pt-4 flex items-center justify-between">
              {ProjectLink ? (
                <a
                  href={ProjectLink || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={handleLiveDemo}
                  className="inline-flex items-center space-x-2 text-gray-300 hover:text-white transition-colors duration-200"
                >
                  <span className="text-sm font-medium">Live Demo</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              ) : (
                <span className="text-gray-600 text-sm">
                  Demo Not Available
                </span>
              )}

              {id ? (
                <Link
                  to={`/project/${toSlug(Title)}`}
                  onClick={handleDetails}
                  className="inline-flex items-center space-x-2 px-4 py-2 rounded-lg bg-white/5 hover:bg-white/10 text-gray-200 hover:text-white transition-all duration-200 hover:scale-105 active:scale-95 focus:outline-none border border-white/5 hover:border-white/20"
                >
                  <span className="text-sm font-medium">Details</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              ) : (
                <span className="text-gray-600 text-sm">
                  Details Not Available
                </span>
              )}
            </div>
          </div>

          {/* Border highlight saat di-hover */}
          <div className="absolute inset-0 border border-transparent group-hover:border-white/10 rounded-xl transition-colors duration-300 pointer-events-none"></div>
        </div>
      </div>
    </div>
  );
};

export default CardProject;