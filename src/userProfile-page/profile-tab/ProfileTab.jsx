

const ProfileTab = () => {
    return (
        <div>
            <div>
                <div className="w-[382px] mx-auto">
                    <div className="border-b border-gray-200">
                        <nav className="flex gap-4 items-center justify-center" aria-label="Tabs">

                            <a
                                href="#"
                                className="flex-1 flex justify-center border-b-2 border-[#FFB800] p-2 text-sm font-medium text-black hover:border-gray-300"
                            >
                                Saved
                            </a>

                            <a
                                href="#"
                                className="flex-1 flex justify-center  border-b-2 border-transparent  p-2 text-sm text-[#585858] font-medium "
                                aria-current="page"
                            >
                                Reviewed
                            </a>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfileTab;