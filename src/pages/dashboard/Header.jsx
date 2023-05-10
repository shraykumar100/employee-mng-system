/* eslint-disable react/prop-types */
function Header({ setIsAdding }) {
	return (
		<header>
			<h1>Employee Management System</h1>
			<div style={{ marginTop: "30px", marginBottom: "18px" }}>
				<button onClick={() => setIsAdding(true)} className="round-button">
					Add Data
				</button>
			</div>
		</header>
	);
}

export default Header;
