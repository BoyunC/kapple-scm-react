const Home = () => {
	return (
		<div className="">
			<div className="card mb-3">
				<div className="card-body">
					<div className="row align-items-center g-3 text-center text-xxl-start">
						<div className="col-12 col-xxl-auto">
							<div className="avatar avatar-5xl">
								<img className="rounded-circle" src="resources/assets/img/team/12.webp" alt="" />
							</div>
						</div>
						<div className="col-12 col-sm-auto flex-1">
							<h3 className="fw-bolder mb-2">Samsung</h3>
							<p className="mb-0">Mobile SPU Chips</p>
							<a className="fw-bold" href="#!">
								test
							</a>
						</div>
					</div>
				</div>
			</div>

			<div className="row">
				<div className="col-4">
					<div className="card mb-3">
						<div className="card-body">
							<div className="row align-items-center g-3 text-center text-xxl-start">
								<div className="col-12 col-xxl-auto">
									<div className="avatar avatar-5xl">
										<img className="rounded-circle" src="resources/assets/img/team/12.webp" alt="" />
									</div>
								</div>
								<div className="col-12 col-sm-auto flex-1">
									<h3 className="fw-bolder mb-2">Samsung</h3>
									<p className="mb-0">Mobile SPU Chips</p>
									<a className="fw-bold" href="#!">
										test
									</a>
								</div>
							</div>
						</div>
					</div>
					<div className="card mb-3">
						<div className="card-body">
							<div className="d-flex align-items-center mb-5">
								<h3>About Retailer</h3>
								<button className="btn btn-link px-3" type="button">
									Edit
								</button>
							</div>

							<div className="mb-4">
								<div className="d-flex align-items-center mb-1">
									<span className="me-2 uil uil-phone"> </span>
									<h5 className="text-1000 mb-0">Phone</h5>
								</div>
								<a href="tel:+1234567890">+1234567890 </a>
							</div>
							<div className="mb-4">
								<div className="d-flex align-items-center mb-1">
									<span className="me-2 uil uil-globe"></span>
									<h5 className="text-1000 mb-0">Website</h5>
								</div>
								<a href="#!">www.bb.ru.com </a>
							</div>
							<div className="mb-4">
								<div className="d-flex align-items-center mb-1">
									<span className="me-2 uil uil-building"></span>
									<h5 className="text-1000 mb-0">Industry</h5>
								</div>
								<p className="mb-0 text-800">Large Enterprise</p>
							</div>
							<div className="mb-4">
								<div className="d-flex align-items-center mb-1">
									<span className="me-2 uil uil-postcard"></span>
									<h5 className="text-1000 mb-0">Number of employees</h5>
								</div>
								<p className="mb-0 text-800">126</p>
							</div>
							<div className="mb-4">
								<div className="d-flex align-items-center mb-1">
									<span className="me-2 uil uil-dollar-alt"></span>
									<h5 className="text-1000 mb-0">Annual Revenue</h5>
								</div>
								<p className="mb-0 text-800">$12000 </p>
							</div>
							<div className="mb-4">
								<div className="d-flex align-items-center mb-1">
									<span className="me-2 uil uil-clock"></span>
									<h5 className="text-1000 mb-0">Last contacted</h5>
								</div>
								<p className="mb-0 text-800">12 November 2021, 10:54 AM</p>
							</div>
							<div className="mb-4">
								<div className="d-flex align-items-center mb-1">
									<span className="me-2 uil uil-file-check-alt"></span>
									<h5 className="text-1000 mb-0">Lead source</h5>
								</div>
								<p className="mb-0 text-800">Advertisement</p>
							</div>
							<div>
								<div className="d-flex align-items-center mb-1">
									<span className="me-2 uil uil-check-circle"></span>
									<h5 className="text-1000 mb-0">Lead status</h5>
								</div>
								<span className="badge badge-phoenix badge-phoenix-primary">New Lead</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Home;
