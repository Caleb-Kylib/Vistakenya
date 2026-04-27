import React, { useState } from 'react';
import { Phone, ArrowLeft, Send, CheckCircle2, Building, Smartphone } from 'lucide-react';

const USSDSimulator = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [screen, setScreen] = useState('home'); // home, menu, campus, type, listings, success
    const [selection, setSelection] = useState({ campus: '', type: '' });
    const [ussdInput, setUssdInput] = useState('');

    const handleAction = (choice) => {
        if (screen === 'home' && choice === '*384#') {
            setScreen('menu');
        } else if (screen === 'menu' && choice === '1') {
            setScreen('campus');
        } else if (screen === 'campus') {
            const campuses = { '1': 'Rongai', '2': 'Juja', '3': 'Kasarani', '4': 'Madaraka' };
            if (campuses[choice]) {
                setSelection(prev => ({ ...prev, campus: campuses[choice] }));
                setScreen('type');
            }
        } else if (screen === 'type') {
            const types = { '1': 'Bedsitter', '2': 'Studio', '3': 'Shared Room' };
            if (types[choice]) {
                setSelection(prev => ({ ...prev, type: types[choice] }));
                setScreen('listings');
            }
        } else if (screen === 'listings') {
            setScreen('success');
        }
        setUssdInput('');
    };

    const reset = () => {
        setScreen('home');
        setSelection({ campus: '', type: '' });
        setUssdInput('');
        setIsOpen(false);
    };

    return (
        <div className="fixed bottom-10 right-10 z-[100]">
            {!isOpen ? (
                <button 
                    onClick={() => setIsOpen(true)}
                    className="flex items-center gap-3 px-6 py-4 bg-teal-600 text-white rounded-2xl font-black shadow-2xl hover:bg-teal-700 transition-all hover:scale-105 group border-2 border-teal-500/20"
                >
                    <Smartphone className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                    <span className="uppercase tracking-widest text-[10px]">Dial *384# (USSD)</span>
                </button>
            ) : (
                <div className="w-80 bg-[#1e1e1e] rounded-[3rem] border-[8px] border-[#2a2a2a] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)] overflow-hidden animate-fadeInUp">
                    {/* Screen Content */}
                    <div className="h-[450px] p-8 flex flex-col justify-between">
                        <div className="space-y-6">
                            {/* Status Bar */}
                            <div className="flex justify-between items-center text-[8px] font-bold text-gray-500 uppercase tracking-widest">
                                <span>VisitaPay Network</span>
                                <span>12:45 PM</span>
                            </div>

                            <div className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10 min-h-[250px] flex flex-col justify-center text-center">
                                {screen === 'home' && (
                                    <p className="text-white font-mono text-sm">VisitaKenya: Dial *384# to find student hostels.</p>
                                )}

                                {screen === 'menu' && (
                                    <div className="text-left space-y-2 text-white font-mono text-xs">
                                        <p className="font-bold border-b border-white/10 pb-2 mb-2">VisitaKenya Student</p>
                                        <p>1. Find Hostel</p>
                                        <p>2. My Bookings</p>
                                        <p>3. Pay Rent</p>
                                        <p>4. Emergency Contact</p>
                                    </div>
                                )}

                                {screen === 'campus' && (
                                    <div className="text-left space-y-2 text-white font-mono text-xs">
                                        <p className="font-bold border-b border-white/10 pb-2 mb-2">Select Campus</p>
                                        <p>1. Ongata Rongai (MMU)</p>
                                        <p>2. Juja (JKUAT)</p>
                                        <p>3. Kasarani (USIU)</p>
                                        <p>4. Madaraka (Strath)</p>
                                    </div>
                                )}

                                {screen === 'type' && (
                                    <div className="text-left space-y-2 text-white font-mono text-xs">
                                        <p className="font-bold border-b border-white/10 pb-2 mb-2">Select Type</p>
                                        <p>1. Bedsitter (8k-12k)</p>
                                        <p>2. Studio (12k-15k)</p>
                                        <p>3. Shared Room (5k-8k)</p>
                                    </div>
                                )}

                                {screen === 'listings' && (
                                    <div className="text-left space-y-2 text-white font-mono text-xs">
                                        <p className="font-bold border-b border-white/10 pb-2 mb-2">Available in {selection.campus}</p>
                                        <p>1. Elite Studios - 11k</p>
                                        <p>2. Campus View - 9k</p>
                                        <p>0. Back</p>
                                    </div>
                                )}

                                {screen === 'success' && (
                                    <div className="space-y-4">
                                        <CheckCircle2 className="w-12 h-12 text-teal-500 mx-auto" />
                                        <p className="text-white font-mono text-xs">Booking Received! Check your SMS for viewing schedule. #StaySafe</p>
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Input Area */}
                        <div className="space-y-4">
                            {screen !== 'success' && (
                                <div className="relative">
                                    <input 
                                        type="text" 
                                        placeholder="Enter choice..."
                                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white font-mono text-sm outline-none focus:border-teal-500/50"
                                        value={ussdInput}
                                        onChange={(e) => setUssdInput(e.target.value)}
                                        onKeyDown={(e) => e.key === 'Enter' && handleAction(ussdInput)}
                                    />
                                    <button 
                                        onClick={() => handleAction(ussdInput)}
                                        className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 bg-teal-600 rounded-lg text-white hover:bg-teal-700"
                                    >
                                        <ArrowLeft className="w-4 h-4 rotate-180" />
                                    </button>
                                </div>
                            )}
                            <button 
                                onClick={reset}
                                className="w-full py-3 text-[10px] font-black text-gray-500 uppercase tracking-widest hover:text-white transition-colors"
                            >
                                {screen === 'success' ? 'Close Simulator' : 'Cancel'}
                            </button>
                        </div>
                    </div>
                    {/* Speaker/Home Bar */}
                    <div className="h-1 bg-[#2a2a2a] w-20 mx-auto mb-4 rounded-full" />
                </div>
            )}
        </div>
    );
};

export default USSDSimulator;
