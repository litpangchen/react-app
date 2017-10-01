import React from "react";

class LoginForm extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="row">
                <div className="col-md-4 col-md-offset-4">
                    <form>
                        <div className="form-group">
                            <label className="control-label">用户名</label>
                            <input type="text" name="username" className="form-control"/>
                        </div>
                    </form>
                </div>
            </div>

        )
    }
}

export default LoginForm;
