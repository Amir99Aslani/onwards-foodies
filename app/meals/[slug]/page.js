import React from 'react';

function mealsDetailPage({params}) {
    return (
        <main>
            <h1>meals Page Detail :</h1>
            {params.slug}
        </main>
    );
}

export default mealsDetailPage;