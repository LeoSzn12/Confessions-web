import { Youtube, Instagram, Twitter } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-[#0D0D0D] py-12 px-4 border-t border-gray-900">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
                <div className="text-center md:text-left">
                    <h3 className="text-2xl font-heading text-brand-red mb-2">CONFESSIONS</h3>
                    <p className="text-gray-600 text-sm">© 2025 Confessions. All rights reserved.</p>
                </div>

                <div className="flex gap-6">
                    <a href="#" className="text-gray-400 hover:text-brand-red transition-colors">
                        <Youtube className="w-6 h-6" />
                    </a>
                    <a href="#" className="text-gray-400 hover:text-brand-red transition-colors">
                        <Instagram className="w-6 h-6" />
                    </a>
                    <a href="#" className="text-gray-400 hover:text-brand-red transition-colors">
                        <Twitter className="w-6 h-6" />
                    </a>
                </div>

                <div className="flex gap-6 text-sm text-gray-500">
                    <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                    <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                    <a href="#" className="hover:text-white transition-colors">Contact</a>
                </div>
            </div>
        </footer>
    );
}
