import { useEffect } from 'react';

// ColorChange component to handle color changes
function ColorChange({ selectedDriver }) {
    useEffect(() => {
        let h2Color, borderColor;
        if (selectedDriver === 'albon') {
            h2Color = '#1AA3DF';
            borderColor = 'navy';
        } else if (selectedDriver === 'alonso') {
            h2Color = 'mediumseagreen';
            borderColor = '#085A4F';
        } else if (selectedDriver === 'bottas') {
            h2Color = '#9D2136';
            borderColor = '#244377';
        } else if (selectedDriver === 'de_vries') {
            h2Color = 'silver';
            borderColor = '#0B2942';
        } else if (selectedDriver === 'gasly') {
            h2Color = '#F293C6';
            borderColor = '#0568B3';
        } else if (selectedDriver === 'hamilton') {
            h2Color = '#2FC7B9';
            borderColor = 'silver';
        } else if (selectedDriver === 'hulkenberg') {
            h2Color = 'crimson';
            borderColor = 'silver';
        } else if (selectedDriver === 'lawson') {
            h2Color = 'silver';
            borderColor = '#0B2942';
        } else if (selectedDriver === 'leclerc') {
            h2Color = '#FD0100';
            borderColor = '#ffe474';
        } else if (selectedDriver === 'kevin_magnussen') {
            h2Color = 'crimson';
            borderColor = 'silver';
        } else if (selectedDriver === 'norris') {
            h2Color = '#FF8313';
            borderColor = 'navy';
        } else if (selectedDriver === 'ocon') {
            h2Color = '#F293C6';
            borderColor = '#0568B3';
        } else if (selectedDriver === 'perez') {
            h2Color = '#FCD91D';
            borderColor = '#0B2942';
        } else if (selectedDriver === 'piastri') {
            h2Color = '#FF8313';
            borderColor = 'navy';
        } else if (selectedDriver === 'ricciardo') {
            h2Color = 'silver';
            borderColor = '#0B2942';
        } else if (selectedDriver === 'russell') {
            h2Color = '#2FC7B9';
            borderColor = 'silver';
        } else if (selectedDriver === 'sainz') {
            h2Color = '#FD0100';
            borderColor = '#ffe474';
        } else if (selectedDriver === 'sargeant') {
            h2Color = '#1AA3DF';
            borderColor = 'navy';
        } else if (selectedDriver === 'stroll') {
            h2Color = 'mediumseagreen';
            borderColor = '#085A4F';
        } else if (selectedDriver === 'tsunoda') {
            h2Color = 'silver';
            borderColor = '#0B2942';
        } else if (selectedDriver === 'max_verstappen') {
            h2Color = '#FCD91D';
            borderColor = '#0B2942';
        } else if (selectedDriver === 'zhou') {
            h2Color = '#9D2136';
            borderColor = '#244377';
        } else {
            h2Color = 'defaultColorForH2';
            borderColor = 'defaultBorderColor';
        }

        const upcomingRacesElement = document.getElementById('upcoming-races-color');
        const constructorsChampionshipElement = document.getElementById('constructors-championship-color');
        const driversChampionshipElement = document.getElementById('drivers-championship-color');
        const favoriteDriverElement = document.getElementById('favorite-driver-color');
        const qualifyingResultslement = document.getElementById('qualifying-color');
        const raceResultslement = document.getElementById('race-color');


        if (upcomingRacesElement) {
            const h2Element = upcomingRacesElement.querySelector('h2');
            if (h2Element) {
                h2Element.style.color = h2Color;
            }
            upcomingRacesElement.style.borderColor = borderColor;
        }

        if (constructorsChampionshipElement) {
            const h2Element = constructorsChampionshipElement.querySelector('h2');
            if (h2Element) {
                h2Element.style.color = h2Color;
            }
            constructorsChampionshipElement.style.borderColor = borderColor;
        }

        if (driversChampionshipElement) {
            const h2Element = driversChampionshipElement.querySelector('h2');
            if (h2Element) {
                h2Element.style.color = h2Color;
            }
            driversChampionshipElement.style.borderColor = borderColor;
        }

        if (raceResultslement) {
            favoriteDriverElement.style.color = h2Color;
            favoriteDriverElement.style.borderColor = borderColor;
        }

        if (qualifyingResultslement) {
            const h2Element = qualifyingResultslement.querySelector('h2');
            if (h2Element) {
                h2Element.style.color = h2Color;
            }
            qualifyingResultslement.style.borderColor = borderColor;
        }

        if (raceResultslement) {
            const h2Element = raceResultslement.querySelector('h2');
            if (h2Element) {
                h2Element.style.color = h2Color;
            }
            raceResultslement.style.borderColor = borderColor;
        }

    }, [selectedDriver]);

    return null; // This component doesn't render any UI
}

export default ColorChange;