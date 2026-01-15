"use client"

import { Skeleton } from "@/components/ui/skeleton"

export function BlogCardSkeleton() {
    return (
        <div className="bg-card border border-border rounded-lg overflow-hidden flex flex-col h-full">
            <Skeleton className="w-full h-48" />
            <div className="p-6 flex flex-col flex-1 space-y-4">
                <div className="flex items-center justify-between">
                    <Skeleton className="h-6 w-20 rounded-full" />
                    <Skeleton className="h-4 w-16" />
                </div>
                <Skeleton className="h-7 w-full" />
                <Skeleton className="h-7 w-2/3" />
                <div className="space-y-2 py-4">
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-4 w-1/2" />
                </div>
                <div className="space-y-3 mt-auto">
                    <Skeleton className="h-4 w-1/3" />
                    <Skeleton className="h-4 w-1/4" />
                </div>
                <Skeleton className="h-6 w-24 mt-4" />
            </div>
        </div>
    )
}

export function EventCardSkeleton() {
    return (
        <div className="bg-card border border-border rounded-lg overflow-hidden flex flex-col h-full">
            <Skeleton className="w-full h-48" />
            <div className="p-6 flex flex-col flex-1 space-y-4">
                <div className="flex items-center justify-between">
                    <Skeleton className="h-6 w-24 rounded-full" />
                    <Skeleton className="h-6 w-16" />
                </div>
                <Skeleton className="h-7 w-full" />
                <div className="space-y-2">
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-4 w-5/6" />
                </div>
                <div className="space-y-3 py-2">
                    <Skeleton className="h-4 w-1/2" />
                    <Skeleton className="h-4 w-1/3" />
                    <Skeleton className="h-4 w-2/3" />
                </div>
                <div className="mt-auto flex items-center justify-between gap-4 pt-4">
                    <Skeleton className="h-6 w-28" />
                    <Skeleton className="h-10 w-24 rounded-md" />
                </div>
            </div>
        </div>
    )
}

export function JobListingSkeleton() {
    return (
        <div className="bg-card border border-border rounded-lg p-6 space-y-4">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                <div className="flex-1 space-y-4">
                    <Skeleton className="h-8 w-3/4" />
                    <Skeleton className="h-5 w-24" />
                    <div className="space-y-2">
                        <Skeleton className="h-4 w-full" />
                        <Skeleton className="h-4 w-full" />
                        <Skeleton className="h-4 w-2/3" />
                    </div>
                </div>
                <div className="flex flex-col gap-4 items-start md:items-end">
                    <Skeleton className="h-4 w-32" />
                    <Skeleton className="h-6 w-20" />
                </div>
            </div>
        </div>
    )
}

export function FeaturedArticleSkeleton() {
    return (
        <div className="max-w-6xl mx-auto px-4 py-16 md:py-24">
            <Skeleton className="h-10 w-48 mb-8" />
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center bg-card border border-border rounded-lg overflow-hidden">
                <Skeleton className="w-full h-96" />
                <div className="p-8 space-y-6">
                    <div className="space-y-4">
                        <Skeleton className="h-6 w-24 rounded-full" />
                        <Skeleton className="h-12 w-full" />
                        <div className="space-y-2">
                            <Skeleton className="h-5 w-32" />
                            <Skeleton className="h-5 w-32" />
                        </div>
                    </div>
                    <div className="space-y-2">
                        <Skeleton className="h-4 w-full" />
                        <Skeleton className="h-4 w-full" />
                        <Skeleton className="h-4 w-3/4" />
                    </div>
                    <Skeleton className="h-12 w-40 rounded-lg" />
                </div>
            </div>
        </div>
    )
}

export function UpcomingHighlightSkeleton() {
    return (
        <div className="max-w-6xl mx-auto px-4 py-8 md:py-12">
            <Skeleton className="h-10 w-48 mb-8" />
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <Skeleton className="w-full h-96 rounded-lg" />
                <div className="space-y-6">
                    <div className="space-y-4">
                        <Skeleton className="h-8 w-32 rounded-full" />
                        <Skeleton className="h-12 w-full" />
                    </div>
                    <div className="space-y-3">
                        <Skeleton className="h-6 w-48" />
                        <Skeleton className="h-6 w-48" />
                        <Skeleton className="h-6 w-48" />
                    </div>
                    <div className="space-y-2">
                        <Skeleton className="h-4 w-full" />
                        <Skeleton className="h-4 w-3/4" />
                    </div>
                    <div className="flex gap-4 pt-4">
                        <Skeleton className="h-12 w-40 rounded-lg" />
                        <Skeleton className="h-12 w-40 rounded-lg" />
                    </div>
                </div>
            </div>
        </div>
    )
}
