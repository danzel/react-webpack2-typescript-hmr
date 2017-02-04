import * as React from 'react';

interface KidState {
    count: number;
}
class Kid extends React.Component<{}, KidState> {
    constructor() {
        super();

        this.state = {
            count: 0
        };

        setInterval(() => {
            this.setState({ count: this.state.count + 1 });
        }, 1000);
    }
    render() {
        return (
            <div>
                Kid {this.state.count}
            </div>
        );
    }
}

export default Kid;