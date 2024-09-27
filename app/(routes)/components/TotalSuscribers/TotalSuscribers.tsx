"use client";

import { Percent } from "lucide-react";
import { ResponsiveContainer, PieChart, Pie, Tooltip, Legend } from "recharts";
import { CustomIcon } from "@/components/CustomIcon";
import { dataTotalSuscribers } from "./TotalSuscribers.data";

export function TotalSuscribers() {
  return (
    <div className="mb-4 lg:mb-0 shadow-sm rounded-lg bg-background p-5 w-full xl:w-96 hover:shadow-lg transition">
      <div className="flex gap-x-2 items-center mb-4">
        <CustomIcon icon={Percent} />
        <p className="text-xl">Total Suscribers</p>
      </div>
      <div className="w-full h-[200px] p-5">
        <ResponsiveContainer aspect={1} maxHeight={200}>
          <PieChart>
            <Pie
              dataKey="value"
              data={dataTotalSuscribers}
              outerRadius={80}
              labelLine={false}
            />
            <Tooltip />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
