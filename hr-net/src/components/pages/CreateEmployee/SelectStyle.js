export const selectStyle = {
    menu: () => ({
        poisition:'relative',
        marginBottom: '2px',
        border: '1px solid grey',
        borderRadius: '3px',
        width:'100%',
    }),
    container: () => ({
        marginTop: '7px',
        marginBottom:'7px',
    }),
    placeholder: (provided) => ({
        ...provided,
        color:'black',
    }),
    control: (provided) => ({
        ...provided,
        border: '2px solid black',
        borderRadius: '3px',
        boxShadow: 'none',
        '&:hover': {
            border: '1px solid #202023',
            cursor:'pointer'
        },
    }),
};