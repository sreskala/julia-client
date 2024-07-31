interface PaginationProps {
    planetsPerPage: number;
    totalPlanets: number;
    handlePageClick: (num: number) => void
}

const Pagination = ({planetsPerPage, totalPlanets, handlePageClick}: PaginationProps) => {
    const pageNumbers = [];

    for (let i = 1; i < Math.ceil(totalPlanets / planetsPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
       <nav>
        <ul className="page-number-container">
            {pageNumbers.map(number => (
                <li key={number}>
                    <button onClick={() => handlePageClick(number)}>
                        {number}
                    </button>
                </li>
            ))}
        </ul>
       </nav>
    )
}

export default Pagination