function ClimbingRoute(props) {
    return (
        <div class="m-2 py-8 px-8 max-w-sm bg-white rounded-xl shadow-lg space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6">
            <img 
                class="block mx-auto h-24 rounded-full sm:mx-0 sm:shrink-0" 
                src="#" 
                alt="" 
            />
            <div class="text-center space-y-2 sm:text-left">
                <div class="space-y-0.5">
                    <p class="text-lg text-black font-semibold">
                        {props.name}
                    </p>
                    <p class="text-slate-500 font-medium">
                        Grade: {props.grade}
                    </p>
                    <p class="text-slate-500 font-medium">
                        Setter: {props.setter}
                    </p>
                    <p class="text-slate-500 font-medium">
                        Number of Flashes: {props.flashes}
                    </p>
                    <p class="text-slate-500 font-medium">
                        Number of Sends: {props.sends}
                    </p>
                </div>
                <button class="px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-300 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">
                    Edit Route Data
                </button>
                <button class="px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-300 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">
                    Add Data
                </button>
            </div>
        </div>
    );
} 


export default ClimbingRoute;