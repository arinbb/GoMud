# AT GPS Coordinate Reference

GPS coordinates for room locations, shelters, and landmarks.
Sources: tnlandforms.us/at, latitude.to, ATC data, FarOut/Guthook

## Format
Each entry: Name | Room ID | Mile | Lat | Lon | Elevation

## Key Landmarks (verified)
Springer Mountain Summit | 1 | 0.0 | 34.6273 | -84.1935 | 3782
Springer Mountain Shelter | 2 | 0.2 | 34.6295 | -84.1927 | 3730
Blood Mountain Summit | 7 | 28.9 | 34.7398 | -83.9369 | 4461
Neel Gap / Mountain Crossings | 8 | 31.6 | 34.7352 | -83.9181 | 3100
Clingmans Dome / Kuwohi | 63 | 200.0 | 35.5629 | -83.4985 | 6643
Newfound Gap | 64 | 207.0 | 35.6112 | -83.4254 | 5046
McAfee Knob | - | 711.6 | 37.3927 | -80.0346 | 3197
Harpers Ferry | - | 1026.0 | 39.3249 | -77.7295 | 300
Mt. Washington | - | 1864.0 | 44.2706 | -71.3033 | 6288
Katahdin Summit | - | 2190.0 | 45.9044 | -68.9213 | 5269

## Georgia Shelters (from tnlandforms.us)
Springer Mtn Shelter | 2 | 0.2 | 34.6295 | -84.1927 | 3730
Stover Creek Shelter | 10 | 2.8 | 34.6418 | -84.1770 | 2930
Hawk Mountain Shelter | 11 | 8.1 | 34.6706 | -84.1272 | 3200
Gooch Mountain Shelter | 12 | 15.7 | 34.6731 | -84.0765 | 2772
Blood Mountain Shelter | 13 | 28.9 | 34.7398 | -83.9369 | 4450
TODO_GPS: Woods Hole Shelter (mile 27.7)
TODO_GPS: Whitley Gap Shelter (mile 38.0)
TODO_GPS: Low Gap Shelter (mile 43.0)
TODO_GPS: Blue Mountain Shelter (mile 50.3)
TODO_GPS: Tray Mountain Shelter (mile 58.4)
TODO_GPS: Deep Gap Shelter (mile 65.8)
TODO_GPS: Plumorchard Gap Shelter (mile 73.9)

## North Carolina Shelters
TODO_GPS: Standing Indian Shelter (mile 86.1)
TODO_GPS: All NC shelters - get from tnlandforms.us/at/m.php?wpt={name}

## Smokies Shelters
TODO_GPS: All Smokies shelters

## Tennessee Shelters
Roan High Knob Shelter | 713 | 379.3 | 36.1061 | -82.1228 | 6275
TODO_GPS: Remaining TN shelters

## Virginia+ Shelters
TODO_GPS: All Virginia through Maine shelters
## Notes
- GPS source: tnlandforms.us/at/m.php?wpt={shelter_code}
- Each shelter page has lat/lon in decimal degrees
- Can batch-retrieve coordinates as rooms are built
- FarOut app has most accurate current coordinates
- Future: use these for GIS map overlay integration
