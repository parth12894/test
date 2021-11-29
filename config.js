/* Magic Mirror Config Sample
 *
 * By Michael Teeuw https://michaelteeuw.nl
 * MIT Licensed.
 *
 * For more information on how you can configure this file
 * See https://github.com/MichMich/MagicMirror#configuration
 *
 */

var config = {
	address: "0.0.0.0", 	// Address to listen on, can be:
							// - "localhost", "127.0.0.1", "::1" to listen on loopback interface
							// - another specific IPv4/6 to listen on a specific interface
							// - "0.0.0.0", "::" to listen on any interface
							// Default, when address config is left out or empty, is "localhost"
	port: 8080,
	basePath: "/", 	// The URL path where MagicMirror is hosted. If you are using a Reverse proxy
					// you must set the sub path here. basePath must end with a /
	ipWhitelist: [], 	// Set [] to allow all IP addresses
															// or add a specific IPv4 of 192.168.1.5 :
															// ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.1.5"],
															// or IPv4 range of 192.168.3.0 --> 192.168.3.15 use CIDR format :
															// ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.3.0/28"],

	useHttps: false, 		// Support HTTPS or not, default "false" will use HTTP
	httpsPrivateKey: "", 	// HTTPS private key path, only require when useHttps is true
	httpsCertificate: "", 	// HTTPS Certificate path, only require when useHttps is true

	language: "en",
	locale: "en-US",
	logLevel: ["INFO", "LOG", "WARN", "ERROR"], // Add "DEBUG" for even more logging
	timeFormat: 12,
	units: "metric",
	// serverOnly:  true/false/"local" ,
	// local for armv6l processors, default
	//   starts serveronly and then starts chrome browser
	// false, default for all NON-armv6l devices
	// true, force serveronly mode, because you want to.. no UI on this device

	modules: [
		{
			module: "alert",
		},
		{
			module: "updatenotification",
			position: "top_bar"
		},
		{
			module: "clock",
			position: "top_left",
			config: {
				displaySeconds: true
			}
			
		},
		{
			module: "MMM-Jast",
			position: "top_left",
			config: {
				maxWidth: "50%",
				updateIntervalInSeconds: 600,
				fadeSpeedInSeconds: 3.5, // Higher value: vertical -> faster // horizontal -> slower
				scroll: "none", // One of ["none", "vertical", "horizontal"]
				useGrouping: true,
				currencyStyle: "symbol", // One of ["code", "symbol", "name"]
				showColors: true,
				showCurrency: true,
				showChangePercent: false,
				showChangeValue: true,
				showChangeValueCurrency: false,
				showDepot: false,
				showDepotGrowthPercent: false,
				showDepotGrowth: false,
				numberDecimalsValues: 2,
				numberDecimalsPercentages: 1,
				maxWidth:"100%",
				stocks: [
					{ name: "TD", symbol: "TD.TO"},
					{ name: "TSLA", symbol: "TSLA"},
					{ name: "DF", symbol: "DF.TO"},
					{ name: "BTC", symbol: "BTC-CAD"},
					{ name: "DOGE", symbol: "DOGE-CAD"},
				]
			}
		},		
		{
			module: "weather",
			position: "top_right",
			config: {
				weatherProvider: "openweathermap",
				type: "current",
				updateInterval: 10 * 60 * 1000, // in ms
				showIndoorTemperature: true,
				showIndoorHumidity: true,
				colored: true,
				showHumidity: true,
				showSun: false,
				appendLocationNameToHeader: false,
				location: "Toronto",
				locationID: "6167865", //ID from http://bulk.openweathermap.org/sample/city.list.json.gz; unzip the gz file and find your city
				apiKey: "6bc8d26985262aa866137e3fb5ec27af"
			}
		},
		{
			module: "weather",
			position: "top_right",
			header: "Weather Forecast",
			config: {
				weatherProvider: "openweathermap",
				type: "forecast",
				colored: true,
				maxNumberOfDays: 7,
				maxEntries: 5,
				fade: "false",
				fadePoint: "1",
				location: "Toronto",
				locationID: "6167865", //ID from http://bulk.openweathermap.org/sample/city.list.json.gz; unzip the gz file and find your city
				apiKey: "6bc8d26985262aa866137e3fb5ec27af"
			}
		},
		{
            module: "MMM-LocalTemperature",
            //position: "top_right", // Only add a position if you want this module to display the data
            header: "Room Temperature",
            config: {
                sensorPin: 4, // For GPIO 22
                // See below for more Configuration Options
                units: "metric",   
                updateInterval: 3,     		//in munites  
            }
        },
		{
			module: "newsfeed",
			position: "bottom",
			config: {
				feeds: [
					//{
					//	title: "New York Times",
					//	url: "https://rss.nytimes.com/services/xml/rss/nyt/HomePage.xml"
					//},
					{
						title: "CBC",
						url: "https://www.cbc.ca/cmlink/rss-topstories"
					},
					{
						title: "CBC - Totonto",
						url: "https://www.cbc.ca/cmlink/rss-canada-toronto"
					},
					{
						title: "New York Times",
						url: "https://www.nytimes.com/svc/collections/v1/publish/https://www.nytimes.com/section/world/rss.xml"
					},
					{
						title: "BBC",
						url: "http://feeds.bbci.co.uk/news/world/rss.xml"
					}
				],
				showSourceTitle: true,
				showPublishDate: true,
				broadcastNewsFeeds: true,
				broadcastNewsUpdates: true,
				lengthDescription: "200",
				updateInterval: "30000",		// in ms
				ignoreOlderThan: "129800000",
				ignoreOldItems: true
			}
		},
	]
};

/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== "undefined") {module.exports = config;}
