import React from 'react'

function HomeList() {
    const styles = {
        container: {
            marginRight:'100px'
        },
        list: {
            fontWeight: "bold",
            listStyleType: 'none',
            // padding: 0,
            marginRight: "30px",
            display: 'flex',
            justifyContent: 'space-between', // Space between the links
        },
        listItem: {
            margin: '0 10px', // Optional, additional spacing between items
        },
        link: {
            textDecoration: 'none',
            color: 'black',
            fontSize: '16px',
            fontWeight: '700',
        },
    };

    return (
        <div style={styles.container}>
            <ul style={styles.list}>
                <li style={styles.listItem}>
                    <a href="#home" style={styles.link} >Categories</a>
                </li>
                <li style={styles.listItem}>
                    <a href="#about" style={styles.link}>Brands</a>
                </li>
                <li style={styles.listItem}>
                    <a href="#services" style={styles.link}>Luxe</a>
                </li>
                <li style={styles.listItem}>
                    <a href="#portfolio" style={styles.link}>Nykka Fashion</a>
                </li>
                <li style={styles.listItem}>
                    {/* <a href="#contact" style={styles.link}>Beauty Advice</a> */}
                </li>
            </ul>
        </div>
    )
}

export default HomeList