## Effect of Home Team Attacks to Score

1. If home team is leading 1-0
2. If the home attack forecast is at least 7% higher than the number of home attacks 5 minutes before
3. If these first 2 conditions are True then predict a second goal for the home team now: 2-0

## How to Forecast

1. Get and array of the number of total attacks by home team
2. Group by minute to have a single total attack value for each minute
3. Feed this array to a Forecasting Algorithm
4. Get the forecast for the next 5 minutes

## Shape of Output

1. A pandas Data Frame. Columns: `match_id`, `match_status`, `home_score`,
   `away_score`, `home_team_attacks`, `goal_pred`, `home_attack_pred`
2. Each row has statistics until the current minute
3. It also has additional 5 rows for the future: Forecast Rows
4. Forecast rows dont have statistics information, just the forecast values
5. Saved as a csv, and also json to be used in API
