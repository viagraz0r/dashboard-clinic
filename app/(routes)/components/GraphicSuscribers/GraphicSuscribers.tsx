"use client";
import { TrendingUp } from "lucide-react";

import {
  AreaChart,
  Area,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { dataGraphics } from "./GraphicSuscribers.data";

export function GraphicSuscribers() {
  return (
    <div className="mt-5">
      <p className="text-3xl mb-3 ">24.479</p>
      <div className="flex gap-x-5 mb-5">
        <div className="flex items-center gap-2 px-3 text-md bg-[#16c8c7] text-white rounded-xl w-fit">
          8,5%
          <TrendingUp strokeWidth={1} className=" w-4 h-4" />
        </div>
        <p className="text-slate-500">+432 increased</p>
      </div>
      <div className="h-[350px]">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            width={730}
            height={250}
            data={dataGraphics}
            margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
          >
            <defs>
              <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#887CFD" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#887CFD" stopOpacity={0} />
              </linearGradient>
              <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
              </linearGradient>
            </defs>
            <XAxis dataKey="year" />
            <YAxis />
            <Tooltip />
            <Area
              type="monotone"
              dataKey="oldCustomers"
              stroke="#82ca9d"
              fillOpacity={1}
              fill="url(#colorPv)"
            />
            <Area
              type="monotone"
              dataKey="newCustomers"
              stroke="#887CFD"
              fillOpacity={1}
              fill="url(#colorUv)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
