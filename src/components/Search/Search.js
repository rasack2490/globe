import './Search.css'

const Search = () => {

    return (
        <div className="mt-4 justify-content-center">
            <div className="row">
                <div className="col-md-8 col-sx-4 mx-auto">
                    <div className="input-group mb-3"> <input type="text" className="form-control input-text" placeholder="Search products...." aria-label="Recipient's username" aria-describedby="basic-addon2" />
                        <div className="input-group-append"> <button className="btn btn-outline-warning btn-lg" type="button"><i className="fa fa-search"></i></button> </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Search