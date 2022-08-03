import "./Pagination.css";
import React from "react";

export default function Pagination(props) {
	return (
		<div className='paginationBar'>
			<p>
				Page {props.currentPage} of {props.totalPages}
			</p>
			<button>
				<span className='material-symbols-outlined'>chevron_left</span>
			</button>
			<button>
				<span className='material-symbols-outlined'>chevron_right</span>
			</button>
		</div>
	);
}
