import "./components.css"

interface PaginationProps {
    planetsPerPage: number;
    totalPlanets: number;
    currentPage: number;
    handlePageClick: (num: number) => void
}

const Pagination = ({planetsPerPage, totalPlanets, handlePageClick, currentPage}: PaginationProps) => {
    const pageNumbers = [];

    for (let i = 1; i < Math.ceil(totalPlanets / planetsPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
       <nav>
        <ul className="page-number-container">
            {pageNumbers.map(number => (
                <li key={number}>
                    <div className={`page-button-container ${currentPage === number ? 'active-page' : ''}`}>
                    <button className="page-button" onClick={() => handlePageClick(number)}>
                        {number}
                    </button>
                    </div>
                </li>
            ))}
        </ul>
       </nav>
    )
}

export default Pagination