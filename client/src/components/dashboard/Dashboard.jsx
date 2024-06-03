import React, { useState } from "react";
import { FaEllipsisH, FaEdit, FaTrash } from "react-icons/fa";


const Dashboard = () => {
  const [timeframe, setTimeframe] = useState("Monthly");

  const handleSelectChange = (event) => {
    setTimeframe(event.target.value);
  };


  const leadData = [];

  return (
    <div className="mx-auto max-w-screen-2xl p-4 md:p-6 2xl:p-10">
      <div>
        <div className="mb-8 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="text-title-sm2 font-bold text-black dark:text-white">
              This Week’s Overview
            </h2>
          </div>
          <div className="flex items-center">
            <p className="font-medium uppercase text-black dark:text-white">
              Short by:
            </p>
            <div className="relative z-20 inline-block">
              <select
                name="#"
                id="#"
                className="relative z-20 inline-flex appearance-none bg-transparent py-1 pl-3 pr-8 font-medium outline-none"
              >
                <option value="" className="dark:bg-boxdark">
                  Current Week
                </option>
                <option value="" className="dark:bg-boxdark">
                  Last Week
                </option>
              </select>
              <span className="absolute right-1 top-1/2 z-10 -translate-y-1/2">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.99995 12.8249C8.8312 12.8249 8.69058 12.7687 8.54995 12.6562L2.0812 6.2999C1.82808 6.04678 1.82808 5.65303 2.0812 5.3999C2.33433 5.14678 2.72808 5.14678 2.9812 5.3999L8.99995 11.278L15.0187 5.34365C15.2718 5.09053 15.6656 5.09053 15.9187 5.34365C16.1718 5.59678 16.1718 5.99053 15.9187 6.24365L9.44995 12.5999C9.30933 12.7405 9.1687 12.8249 8.99995 12.8249Z"
                    fill="#64748B"
                  ></path>
                </svg>
              </span>
            </div>
          </div>
        </div>

        <div className="2xl:gap-7.5 grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-6 xl:grid-cols-3">
          <div className="xl:p-7.5 rounded-sm border border-stroke bg-white p-4 shadow-default dark:border-strokedark dark:bg-boxdark md:p-6">
            <div className="flex items-end justify-between">
              <div>
                <h3 className="mb-4 text-title-lg font-bold text-black dark:text-white">
                  197
                </h3>
                <p className="font-medium">Customers Added</p>
                <span className="mt-2 flex items-center gap-2">
                  <span className="flex items-center gap-1 rounded-md bg-meta-3 p-1 text-xs font-medium text-white">
                    <svg
                      width="14"
                      height="15"
                      viewBox="0 0 14 15"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M13.0155 5.24683H9.49366C9.23116 5.24683 9.01241 5.46558 9.01241 5.72808C9.01241 5.99058 9.23116 6.20933 9.49366 6.20933H11.6593L8.85928 8.09058C8.74991 8.17808 8.59678 8.17808 8.46553 8.09058L5.57803 6.18745C5.11866 5.8812 4.54991 5.8812 4.09053 6.18745L0.721783 8.44058C0.503033 8.5937 0.437408 8.89995 0.590533 9.1187C0.678033 9.24995 0.831157 9.33745 1.00616 9.33745C1.09366 9.33745 1.20303 9.31558 1.26866 9.24995L4.65928 6.99683C4.76866 6.90933 4.92178 6.90933 5.05303 6.99683L7.94053 8.92183C8.39991 9.22808 8.96866 9.22808 9.42803 8.92183L12.5124 6.8437V9.27183C12.5124 9.53433 12.7312 9.75308 12.9937 9.75308C13.2562 9.75308 13.4749 9.53433 13.4749 9.27183V5.72808C13.5187 5.46558 13.278 5.24683 13.0155 5.24683Z"
                        fill="white"
                      ></path>
                    </svg>
                    <span>+2.5%</span>
                  </span>
                  <span className="text-sm font-medium">Since last week</span>
                </span>
              </div>
              <div>
                <svg className="h-17.5 w-17.5 -rotate-90 transform">
                  <circle
                    className="text-stroke dark:text-strokedark"
                    stroke-width="10"
                    stroke="currentColor"
                    fill="transparent"
                    r="30"
                    cx="35"
                    cy="35"
                  ></circle>
                  <circle
                    class="text-primary"
                    stroke-width="10"
                    stroke-dasharray="188.49555921538757"
                    stroke-dashoffset="75.39822368615502"
                    stroke="currentColor"
                    fill="transparent"
                    r="30"
                    cx="35"
                    cy="35"
                  ></circle>
                </svg>
              </div>
            </div>
          </div>
          <div className="xl:p-7.5 rounded-sm border border-stroke bg-white p-4 shadow-default dark:border-strokedark dark:bg-boxdark md:p-6">
            <div className="flex items-end justify-between">
              <div>
                <h3 className="mb-4 text-title-lg font-bold text-black dark:text-white">
                  745
                </h3>
                <p className="font-medium">Invoice Generated</p>
                <span className="mt-2 flex items-center gap-2">
                  <span className="flex items-center gap-1 rounded-md bg-red p-1 text-xs font-medium text-white">
                    <svg
                      width="14"
                      height="15"
                      viewBox="0 0 14 15"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M13.0157 5.24683C12.7532 5.24683 12.5344 5.46558 12.5344 5.72808V8.1562L9.40631 6.07808C8.94693 5.77183 8.37818 5.77183 7.91881 6.07808L5.0313 8.00308C4.92193 8.09058 4.7688 8.09058 4.63755 8.00308L1.24693 5.74995C1.02818 5.59683 0.721929 5.66245 0.568804 5.8812C0.415679 6.09995 0.481304 6.4062 0.700054 6.55933L4.09068 8.81245C4.55005 9.1187 5.1188 9.1187 5.57818 8.81245L8.46568 6.88745C8.57506 6.79995 8.72818 6.79995 8.85943 6.88745L11.6594 8.7687H9.4938C9.23131 8.7687 9.01256 8.98745 9.01256 9.24995C9.01256 9.51245 9.23131 9.7312 9.4938 9.7312H13.0157C13.2782 9.7312 13.4969 9.51245 13.4969 9.24995V5.72808C13.5188 5.46558 13.2782 5.24683 13.0157 5.24683Z"
                        fill="white"
                      ></path>
                    </svg>
                    <span>+1.5%</span>
                  </span>
                  <span className="text-sm font-medium">Since last week</span>
                </span>
              </div>
              <div x-data="{percent : 30}">
                <svg className="h-17.5 w-17.5 -rotate-90 transform">
                  <circle
                    className="text-stroke dark:text-strokedark"
                    stroke-width="10"
                    stroke="currentColor"
                    fill="transparent"
                    r="30"
                    cx="35"
                    cy="35"
                  ></circle>
                  <circle
                    className="text-primary"
                    stroke-width="10"
                    stroke-dasharray="188.49555921538757"
                    stroke-dashoffset="131.9468914507713"
                    stroke="currentColor"
                    fill="transparent"
                    r="30"
                    cx="35"
                    cy="35"
                  ></circle>
                </svg>
              </div>
            </div>
          </div>
          <div className="xl:p-7.5 rounded-sm border border-stroke bg-white p-4 shadow-default dark:border-strokedark dark:bg-boxdark md:p-6">
            <div className="flex items-end justify-between">
              <div>
                <h3 className="mb-4 text-title-lg font-bold text-black dark:text-white">
                  512
                </h3>
                <p className="font-medium">Invoice Sent</p>
                <span className="mt-2 flex items-center gap-2">
                  <span className="flex items-center gap-1 rounded-md bg-meta-3 p-1 text-xs font-medium text-white">
                    <svg
                      width="14"
                      height="15"
                      viewBox="0 0 14 15"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M13.0155 5.24683H9.49366C9.23116 5.24683 9.01241 5.46558 9.01241 5.72808C9.01241 5.99058 9.23116 6.20933 9.49366 6.20933H11.6593L8.85928 8.09058C8.74991 8.17808 8.59678 8.17808 8.46553 8.09058L5.57803 6.18745C5.11866 5.8812 4.54991 5.8812 4.09053 6.18745L0.721783 8.44058C0.503033 8.5937 0.437408 8.89995 0.590533 9.1187C0.678033 9.24995 0.831157 9.33745 1.00616 9.33745C1.09366 9.33745 1.20303 9.31558 1.26866 9.24995L4.65928 6.99683C4.76866 6.90933 4.92178 6.90933 5.05303 6.99683L7.94053 8.92183C8.39991 9.22808 8.96866 9.22808 9.42803 8.92183L12.5124 6.8437V9.27183C12.5124 9.53433 12.7312 9.75308 12.9937 9.75308C13.2562 9.75308 13.4749 9.53433 13.4749 9.27183V5.72808C13.5187 5.46558 13.278 5.24683 13.0155 5.24683Z"
                        fill="white"
                      ></path>
                    </svg>
                    <span>+0.5%</span>
                  </span>
                  <span className="text-sm font-medium">Since last week</span>
                </span>
              </div>
              <div>
                <svg className="h-17.5 w-17.5 -rotate-90 transform">
                  <circle
                    className="text-stroke dark:text-strokedark"
                    stroke-width="10"
                    stroke="currentColor"
                    fill="transparent"
                    r="30"
                    cx="35"
                    cy="35"
                  ></circle>
                  <circle
                    className="text-primary"
                    stroke-width="10"
                    stroke-dasharray="188.49555921538757"
                    stroke-dashoffset="56.548667764616255"
                    stroke="currentColor"
                    fill="transparent"
                    r="30"
                    cx="35"
                    cy="35"
                  ></circle>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-7.5 grid grid-cols-12 gap-4 md:gap-6 2xl:gap-7.5">
        <div className="col-span-12">
          <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
            <div className="p-4 md:p-6 xl:p-7.5">
              {/* Header */}
              <div className="flex items-center justify-between">
                <h2 className="text-title-sm2 font-bold text-black dark:text-white">
                  Customers Report
                </h2>
                <div className="relative flex">
                  <button className="text-[#98A6AD] hover:text-body">
                    <FaEllipsisH className="fill-current" size={18} />
                  </button>
                  {/* Options dropdown */}
                </div>
              </div>
            </div>
            {/* Table header */}
            <div className="border-b border-stroke px-4 pb-5 dark:border-strokedark md:px-6 xl:px-7.5">
              <div className="flex items-center gap-3">
                <div className="w-2/12 xl:w-3/12">
                  <span className="font-medium">Name</span>
                </div>
                <div className="w-6/12 2xsm:w-5/12 md:w-3/12">
                  <span className="font-medium">Email</span>
                </div>
                <div className="hidden w-4/12 md:block xl:w-3/12">
                  <span className="font-medium">Project</span>
                </div>
                <div className="hidden w-1/12 xl:block">
                  <span className="font-medium">Duration</span>
                </div>
                <div className="w-4/12 2xsm:w-3/12 md:w-2/12 xl:w-1/12">
                  <span className="font-medium">Status</span>
                </div>
                <div className="hidden w-2/12 text-center 2xsm:block md:w-1/12">
                  <span className="font-medium">Actions</span>
                </div>
              </div>
            </div>
            <div className="p-4 md:p-6 xl:p-7.5">
              <div className="flex flex-col gap-7">
                {leadData.map((lead, index) => (
                  <div key={index} className="flex items-center gap-3">
                    {/* Lead item */}
                    <div className="hidden w-2/12 2xsm:block md:w-1/12">
                      <button className="mx-auto block hover:text-meta-1">
                        <FaEllipsisH
                          className="mx-auto fill-current"
                          size={22}
                        />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="col-span-12 xl:col-span-5">
          <div className="sm:px-7.5 rounded-sm border border-stroke bg-white px-5 pb-5 pt-7.5 shadow-default dark:border-strokedark dark:bg-boxdark">
            <div className="mb-3 justify-between gap-4 sm:flex">
              <div>
                <h4 className="text-title-sm2 font-bold text-black dark:text-white">
                  Used Devices
                </h4>
              </div>
              <div className="mt-2 flex items-center sm:mt-0">
                <p className="font-medium uppercase text-black dark:text-white">
                  Short by:
                </p>
                <div className="relative z-20 inline-block">
                  <select
                    name="timeframe"
                    id="timeframe"
                    value={timeframe}
                    onChange={handleSelectChange}
                    className="relative z-20 inline-flex appearance-none bg-transparent py-1 pl-3 pr-8 font-medium outline-none"
                  >
                    <option value="Monthly" className="dark:bg-boxdark">
                      Monthly
                    </option>
                    <option value="Weekly" className="dark:bg-boxdark">
                      Weekly
                    </option>
                  </select>
                  <span className="absolute right-1 top-1/2 z-10 -translate-y-1/2">
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 18 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M8.99995 12.8249C8.8312 12.8249 8.69058 12.7687 8.54995 12.6562L2.0812 6.2999C1.82808 6.04678 1.82808 5.65303 2.0812 5.3999C2.33433 5.14678 2.72808 5.14678 2.9812 5.3999L8.99995 11.278L15.0187 5.34365C15.2718 5.09053 15.6656 5.09053 15.9187 5.34365C16.1718 5.59678 16.1718 5.99053 15.9187 6.24365L9.44995 12.5999C9.30933 12.7405 9.1687 12.8249 8.99995 12.8249Z"
                        fill="#64748B"
                      ></path>
                    </svg>
                  </span>
                </div>
              </div>
            </div>
            <div className="mb-2">
              <div id="chartEight" className="mx-auto flex justify-center">
                <div style={{ minHeight: "295.367px" }}>
                  {/* Placeholder for the chart */}
                  <div
                    id="apexchartskuxc9nfu"
                    className="apexcharts-canvas apexchartskuxc9nfu apexcharts-theme-light"
                    style={{ width: "380px", height: "295.367px" }}
                  >
                    <svg
                      id="SvgjsSvg10379"
                      width="380"
                      height="295.3666666666667"
                      xmlns="http://www.w3.org/2000/svg"
                      version="1.1"
                      xmlns:xlink="http://www.w3.org/1999/xlink"
                      xmlns:svgjs="http://svgjs.dev"
                      className="apexcharts-svg"
                      xmlns:data="ApexChartsNS"
                      transform="translate(0, 0)"
                      style={{ background: "transparent" }}
                    >
                      <g
                        id="SvgjsG10381"
                        className="apexcharts-inner apexcharts-graphical"
                        transform="translate(44.66666666666666, 0)"
                      >
                        <defs id="SvgjsDefs10380">
                          <clipPath id="gridRectMaskkuxc9nfu">
                            <rect
                              id="SvgjsRect10383"
                              width="298.6666666666667"
                              height="316.6666666666667"
                              x="-3"
                              y="-1"
                              rx="0"
                              ry="0"
                              opacity="1"
                              stroke-width="0"
                              stroke="none"
                              stroke-dasharray="0"
                              fill="#fff"
                            ></rect>
                          </clipPath>
                          <clipPath id="forecastMaskkuxc9nfu"></clipPath>
                          <clipPath id="nonForecastMaskkuxc9nfu"></clipPath>
                          <clipPath id="gridRectMarkerMaskkuxc9nfu">
                            <rect
                              id="SvgjsRect10384"
                              width="296.6666666666667"
                              height="318.6666666666667"
                              x="-2"
                              y="-2"
                              rx="0"
                              ry="0"
                              opacity="1"
                              stroke-width="0"
                              stroke="none"
                              stroke-dasharray="0"
                              fill="#fff"
                            ></rect>
                          </clipPath>
                        </defs>
                        <g id="SvgjsG10385" className="apexcharts-pie">
                          <g
                            id="SvgjsG10386"
                            transform="translate(0, 0) scale(1)"
                          >
                            <circle
                              id="SvgjsCircle10387"
                              r="102.57317073170732"
                              cx="146.33333333333334"
                              cy="146.33333333333334"
                              fill="transparent"
                            ></circle>
                            <g id="SvgjsG10388" className="apexcharts-slices">
                              <g
                                id="SvgjsG10389"
                                class="apexcharts-series apexcharts-pie-series"
                                seriesName="Desktop"
                                rel="1"
                                data:realIndex="0"
                              >
                                <path
                                  id="SvgjsPath10390"
                                  d="M 146.33333333333334 9.569105691056905 A 136.76422764227644 136.76422764227644 0 1 1 16.262823438072587 188.59580389736072 L 48.78045091188777 178.0301862563539 A 102.57317073170732 102.57317073170732 0 1 0 146.33333333333334 43.76016260162602 L 146.33333333333334 9.569105691056905 z"
                                  fill="rgba(15,173,207,1)"
                                  fill-opacity="1"
                                  stroke-opacity="1"
                                  stroke-linecap="butt"
                                  stroke-width="2"
                                  stroke-dasharray="0"
                                  className="apexcharts-pie-area apexcharts-donut-slice-0"
                                  index="0"
                                  j="0"
                                  data:angle="252"
                                  data:startAngle="0"
                                  data:strokeWidth="2"
                                  data:value="70"
                                  data:pathOrig="M 146.33333333333334 9.569105691056905 A 136.76422764227644 136.76422764227644 0 1 1 16.262823438072587 188.59580389736072 L 48.78045091188777 178.0301862563539 A 102.57317073170732 102.57317073170732 0 1 0 146.33333333333334 43.76016260162602 L 146.33333333333334 9.569105691056905 z"
                                  stroke="#ffffff"
                                ></path>
                              </g>
                              <g
                                id="SvgjsG10391"
                                className="apexcharts-series apexcharts-pie-series"
                                seriesName="Tablet"
                                rel="2"
                                data:realIndex="1"
                              >
                                <path
                                  id="SvgjsPath10392"
                                  d="M 16.262823438072587 188.59580389736072 A 136.76422764227644 136.76422764227644 0 0 1 65.94533728403265 35.68874894816777 L 86.04233629635783 63.349895044459174 A 102.57317073170732 102.57317073170732 0 0 0 48.78045091188777 178.0301862563539 L 16.262823438072587 188.59580389736072 z"
                                  fill="rgba(128,202,238,1)"
                                  fill-opacity="1"
                                  stroke-opacity="1"
                                  stroke-linecap="butt"
                                  stroke-width="2"
                                  stroke-dasharray="0"
                                  className="apexcharts-pie-area apexcharts-donut-slice-1"
                                  index="0"
                                  j="1"
                                  data:angle="72"
                                  data:startAngle="252"
                                  data:strokeWidth="2"
                                  data:value="20"
                                  data:pathOrig="M 16.262823438072587 188.59580389736072 A 136.76422764227644 136.76422764227644 0 0 1 65.94533728403265 35.68874894816777 L 86.04233629635783 63.349895044459174 A 102.57317073170732 102.57317073170732 0 0 0 48.78045091188777 178.0301862563539 L 16.262823438072587 188.59580389736072 z"
                                  stroke="#ffffff"
                                ></path>
                              </g>
                              <g
                                id="SvgjsG10393"
                                className="apexcharts-series apexcharts-pie-series"
                                seriesName="Mobile"
                                rel="3"
                                data:realIndex="2"
                              >
                                <path
                                  id="SvgjsPath10394"
                                  d="M 65.94533728403265 35.68874894816777 A 136.76422764227644 136.76422764227644 0 0 1 146.30946347274147 9.569107774095187 L 146.31543093788943 43.76016416390475 A 102.57317073170732 102.57317073170732 0 0 0 86.04233629635783 63.349895044459174 L 65.94533728403265 35.68874894816777 z"
                                  fill="rgba(60,80,224,1)"
                                  fill-opacity="1"
                                  stroke-opacity="1"
                                  stroke-linecap="butt"
                                  stroke-width="2"
                                  stroke-dasharray="0"
                                  class="apexcharts-pie-area apexcharts-donut-slice-2"
                                  index="0"
                                  j="2"
                                  data:angle="36"
                                  data:startAngle="324"
                                  data:strokeWidth="2"
                                  data:value="10"
                                  data:pathOrig="M 65.94533728403265 35.68874894816777 A 136.76422764227644 136.76422764227644 0 0 1 146.30946347274147 9.569107774095187 L 146.31543093788943 43.76016416390475 A 102.57317073170732 102.57317073170732 0 0 0 86.04233629635783 63.349895044459174 L 65.94533728403265 35.68874894816777 z"
                                  stroke="#ffffff"
                                ></path>
                              </g>
                            </g>
                          </g>
                        </g>
                        <line
                          id="SvgjsLine10395"
                          x1="0"
                          y1="0"
                          x2="292.6666666666667"
                          y2="0"
                          stroke="#b6b6b6"
                          stroke-dasharray="0"
                          stroke-width="1"
                          stroke-linecap="butt"
                          className="apexcharts-ycrosshairs"
                        ></line>
                        <line
                          id="SvgjsLine10396"
                          x1="0"
                          y1="0"
                          x2="292.6666666666667"
                          y2="0"
                          stroke-dasharray="0"
                          stroke-width="0"
                          stroke-linecap="butt"
                          className="apexcharts-ycrosshairs-hidden"
                        ></line>
                      </g>
                      <g
                        id="SvgjsG10382"
                        className="apexcharts-annotations"
                      ></g>
                    </svg>
                    <div
                      className="apexcharts-legend"
                      style={{ maxHeight: "158.333px" }}
                    ></div>
                    <div className="apexcharts-tooltip apexcharts-theme-dark">
                      <div
                        className="apexcharts-tooltip-series-group"
                        style={{ order: 1 }}
                      >
                        <span
                          className="apexcharts-tooltip-marker"
                          style={{ backgroundColor: "rgb(15, 173, 207)" }}
                        ></span>
                        <div
                          className="apexcharts-tooltip-text"
                          style={{
                            fontFamily: "Helvetica, Arial, sans-serif",
                            fontSize: "12px",
                          }}
                        >
                          <div className="apexcharts-tooltip-y-group">
                            <span className="apexcharts-tooltip-text-y-label"></span>
                            <span className="apexcharts-tooltip-text-y-value"></span>
                          </div>
                          <div className="apexcharts-tooltip-goals-group">
                            <span className="apexcharts-tooltip-text-goals-label"></span>
                            <span className="apexcharts-tooltip-text-goals-value"></span>
                          </div>
                          <div className="apexcharts-tooltip-z-group">
                            <span className="apexcharts-tooltip-text-z-label"></span>
                            <span className="apexcharts-tooltip-text-z-value"></span>
                          </div>
                        </div>
                      </div>
                      <div
                        className="apexcharts-tooltip-series-group"
                        style={{ order: 2 }}
                      >
                        <span
                          className="apexcharts-tooltip-marker"
                          style={{ backgroundColor: "rgb(128, 202, 238)" }}
                        ></span>
                        <div
                          className="apexcharts-tooltip-text"
                          style={{
                            fontFamily: "Helvetica, Arial, sans-serif",
                            fontSize: "12px",
                          }}
                        >
                          <div className="apexcharts-tooltip-y-group">
                            <span className="apexcharts-tooltip-text-y-label"></span>
                            <span className="apexcharts-tooltip-text-y-value"></span>
                          </div>
                          <div className="apexcharts-tooltip-goals-group">
                            <span className="apexcharts-tooltip-text-goals-label"></span>
                            <span className="apexcharts-tooltip-text-goals-value"></span>
                          </div>
                          <div className="apexcharts-tooltip-z-group">
                            <span className="apexcharts-tooltip-text-z-label"></span>
                            <span className="apexcharts-tooltip-text-z-value"></span>
                          </div>
                        </div>
                      </div>
                      <div
                        className="apexcharts-tooltip-series-group"
                        style={{ order: 3 }}
                      >
                        <span
                          className="apexcharts-tooltip-marker"
                          style={{ backgroundColor: "rgb(60, 80, 224)" }}
                        ></span>
                        <div
                          className="apexcharts-tooltip-text"
                          style={{
                            fontFamily: "Helvetica, Arial, sans-serif",
                            fontSize: "12px",
                          }}
                        >
                          <div className="apexcharts-tooltip-y-group">
                            <span className="apexcharts-tooltip-text-y-label"></span>
                            <span className="apexcharts-tooltip-text-y-value"></span>
                          </div>
                          <div className="apexcharts-tooltip-goals-group">
                            <span className="apexcharts-tooltip-text-goals-label"></span>
                            <span className="apexcharts-tooltip-text-goals-value"></span>
                          </div>
                          <div className="apexcharts-tooltip-z-group">
                            <span className="apexcharts-tooltip-text-z-label"></span>
                            <span className="apexcharts-tooltip-text-z-value"></span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="block h-4 w-4 rounded-full border-4 border-primary"></span>
                  <span className="font-medium text-black-2 dark:text-white">
                    Mobile
                  </span>
                </div>
                <span className="inline-block rounded-md bg-primary px-1.5 py-0.5 text-xs font-medium text-white">
                  10%
                </span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="block h-4 w-4 rounded-full border-4 border-secondary"></span>
                  <span className="font-medium text-black-2 dark:text-white">
                    Tablet
                  </span>
                </div>
                <span className="inline-block rounded-md bg-secondary px-1.5 py-0.5 text-xs font-medium text-white">
                  20%
                </span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="block h-4 w-4 rounded-full border-4 border-tertiary"></span>
                  <span className="font-medium text-black-2 dark:text-white">
                    Desktop
                  </span>
                </div>
                <span className="inline-block rounded-md bg-warning px-1.5 py-0.5 text-xs font-medium text-black">
                  70%
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="col-span-12 rounded-sm border border-stroke bg-white py-6 px-7.5 shadow-default dark:border-strokedark dark:bg-boxdark xl:col-span-7">
          <h4 className="mb-2 text-xl font-semibold text-black dark:text-white">
            Region labels
          </h4>
          <div
            id="mapOne"
            className="mapOne map-btn  jvm-container"
            style={{ backgroundColor: "transparent" }}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15283819.921883078!2d72.07554419505999!3d20.73452072278213!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30635ff06b92b791%3A0xd78c4fa1854213a6!2sIndia!5e0!3m2!1sen!2sin!4v1716690179660!5m2!1sen!2sin"
              width="600"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Map"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
