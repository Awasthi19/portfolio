"use client";

import * as React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { format, addMonths, subMonths, startOfMonth, endOfMonth, eachDayOfInterval, getDay, isToday, isSameDay } from "date-fns";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";

export type CalendarProps = {
  className?: string;
  classNames?: Record<string, string>;
  showOutsideDays?: boolean;
  [key: string]: any; // Allow other DayPicker props
};

function Calendar({
  className,
  classNames,
  showOutsideDays = true,
  ...props
}: CalendarProps) {
  const [currentMonth, setCurrentMonth] = React.useState(startOfMonth(new Date()));

  // Generate days for the current month using eachDayOfInterval
  const daysInMonth = eachDayOfInterval({
    start: startOfMonth(currentMonth),
    end: endOfMonth(currentMonth),
  });
  const firstDayOfMonth = getDay(startOfMonth(currentMonth));
  const lastDayOfMonth = endOfMonth(currentMonth);

  // Generate placeholder days for the start of the month (to align with week)
  const placeholders = Array(firstDayOfMonth).fill(null);

  // Handle navigation
  const goToPreviousMonth = () => setCurrentMonth(subMonths(currentMonth, 1));
  const goToNextMonth = () => setCurrentMonth(addMonths(currentMonth, 1));

  // Handle date selection
  const handleDayClick = (day: Date) => {
    if (props.onDayClick) {
      props.onDayClick(day);
    }
  };

  return (
    <div className={cn("p-3", className)} {...props}>
      {/* Caption and Navigation */}
      <div className="flex justify-center pt-1 relative items-center">
        <button
          onClick={goToPreviousMonth}
          className={cn(
            buttonVariants({ variant: "outline" }),
            "absolute left-1 h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100",
            classNames?.nav_button_previous
          )}
        >
          <ChevronLeft className="h-4 w-4" />
        </button>
        <span className={cn("text-sm font-medium", classNames?.caption_label)}>
          {format(currentMonth, "MMMM yyyy")}
        </span>
        <button
          onClick={goToNextMonth}
          className={cn(
            buttonVariants({ variant: "outline" }),
            "absolute right-1 h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100",
            classNames?.nav_button_next
          )}
        >
          <ChevronRight className="h-4 w-4" />
        </button>
      </div>

      {/* Days Grid */}
      <div className={cn("space-y-4", classNames?.month)}>
        {/* Header (Weekdays) */}
        <div className={cn("flex", classNames?.head_row)}>
          {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
            <div
              key={day}
              className={cn(
                "text-muted-foreground rounded-md w-9 font-normal text-[0.8rem] text-center",
                classNames?.head_cell
              )}
            >
              {day}
            </div>
          ))}
        </div>

        {/* Days */}
        <div className={cn("grid grid-cols-7 gap-1", classNames?.table)}>
          {placeholders.map((_, index) => (
            <div
              key={`placeholder-${index}`}
              className={cn(
                "h-9 w-9 p-0 text-center text-sm",
                showOutsideDays ? "text-muted-foreground opacity-50" : "invisible",
                classNames?.day_outside
              )}
            />
          ))}
          {daysInMonth.map((day) => (
            <button
              key={day.toISOString()}
              onClick={() => handleDayClick(day)}
              className={cn(
                buttonVariants({ variant: "ghost" }),
                "h-9 w-9 p-0 font-normal text-sm",
                isToday(day) && "bg-accent text-accent-foreground",
                props.selected && isSameDay(day, props.selected) &&
                  "bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground",
                "focus-within:relative focus-within:z-20",
                classNames?.day,
                props.selected && isSameDay(day, props.selected) && classNames?.day_selected,
                isToday(day) && classNames?.day_today
              )}
            >
              {format(day, "d")}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
Calendar.displayName = "Calendar";

export { Calendar };