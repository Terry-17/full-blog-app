const LoadMoreDataBtn = ({ state, fetchDataFun, additionalParam }) => {

    if(state != null && state.totalDocs > state.results.length){
        return (
            <button
            onClick={() => fetchDataFun({ ...additionalParam , page: state.page + 1 })}
            className="text-slate-800 p-2 px-3 hover:bg-yellow-5030 rounded-md flex items-center gap-2"
            >
                Load More
            </button>
        )   
    }

}

export default LoadMoreDataBtn;