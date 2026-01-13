"use client";
import { use } from "react";
import React from "react";

const DocsPage = ({ params }: { params: Promise<{ slug: string[] }> }) => {
    const { slug } = use(params);

    return (
        <div className="container mx-auto px-4 py-20 text-center">
            <h1 className="text-4xl font-bold mb-4">{slug?.join(" / ")}</h1>
            <p className="text-gray-600 text-lg">
                This is a placeholder page for the {slug?.join(" ")} documentation.
            </p>
            <div className="mt-10 p-10 bg-gray-100 rounded-lg border border-gray-200">
                <p className="text-gray-400 italic">Content coming soon...</p>
            </div>
        </div>
    );
};

export default DocsPage;
