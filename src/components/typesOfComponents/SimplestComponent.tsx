// javascript style function statement

function SimplestComponent() {
    return <h1>Hello this is SimplestComponent</h1>
}

function SimplestComponentWithProps(props) {
    return <h1>Hello this is SimplestComponent and my name is {props.name}</h1>
}

type PersonProps = {
    name: string,
    surname: string,
    age?: number
}

// typescript style
function TypescriptComponentWithProps(props: PersonProps) {
    return (
        <div>
            <h1>Hello this is SimplestComponent and my name is {props.name} {props.surname}. </h1>
            <div>And his age is {props.age}</div>
        </div>
    );
}

function TypescriptComponentWithConditionProps(props: PersonProps) {
    return (
        <div>
            <h1>Hello this is SimplestComponent and my name is {props.name} {props.surname}. </h1>
            {props.age && <div>And his age is {props.age}</div>}
        </div>
    );
}

export {SimplestComponent, SimplestComponentWithProps, TypescriptComponentWithProps, TypescriptComponentWithConditionProps};