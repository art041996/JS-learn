const argumentCheck = (value) =>  ( (typeof value === "undefined") ?  ( new Error("Have not passed the param:value") ) : value )
