# ReactJS Time Difference Calculator App

The project is built using **Vite** (https://vitejs.dev/).

**To run project** you need to launch these commands (after cloning this repository):  
**npm ci** 
followed by 
**npm start dev**
Next, you could open the application in the browser.

**To run tests** you need to launch this command:  
**npm run test** 

**Application** 
This  application calculates the time difference between various locations around the world. This tool will be useful for individuals who frequently navigate different time zones, such as travelers, coordinators, or anyone working with geographically dispersed teams.

**To successfully solve any problem, you need to choose the right tools.**
The main task in implementing the functionality of this application was to find a tool that based on the name of a geographic point (city, region) would return information about time (current time, time offset relative to Greenwich, etc.). Such a tool was successfully found; it turned out to be the service https://ipgeolocation.io/

**How to use this application:**
1) First you need to enter a “reference point” relative to which the time difference will be calculated. This can be done by entering the name of the city (or region) in the text input field and clicking the "Set" button. If the request is successfully processed additional information about the locality and the current time there will appear in the panel. If an error occurs a corresponding message will appear. I strongly advise you to carefully enter the desired geographical location in order to avoid errors in the response. Don't be afraid to be more specific with your request; for example, enter "Brest, Belarus" instead of "Brest" to ensure that you get data about a Belarusian, not a French city.
2) After determining the “reference point” you can add places to compare times. You can do this by clicking the “Add location” button and then perform the same steps as in step 1. After receiving data about the entered location, the time difference will be recorded in this cell.
3) You can add several places; all of them will compare time indicators with the data of the “reference point”.
4) To clear the list of places, click the "Clear list" button.

Tests have been added to the project (using vitest), which check the basic functionality of application components.
