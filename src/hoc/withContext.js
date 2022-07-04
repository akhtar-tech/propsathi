import React from 'react';
import DataContext from '../context/ContextData';

const withContext = (WrappedComponent) => (props) => {
    return (
        <DataContext.Consumer>
            {
                (contextProps) => (
                    <WrappedComponent {...props} {...contextProps} />
                )
            }
        </DataContext.Consumer>
    )
}

export default withContext