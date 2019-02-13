# 21---Machine-Learning
Final Team Project
  
 
  
  Wait Times for Disney World Attractions
Team members: Reema Singh, Jessika Virtanen, Kimberly Gordon, Melissa Wood, Serena Terry, Sean McCray


Datasets being used: https://touringplans.com/walt-disney-world/crowd-calendar#DataSets

Overview: Use machine learning to see if we can predict wait times at Walt Disney World attractions, create visualizations looking at wait times and attraction popularity during various times of year, and create a map showing attraction information. 

Project utilizes: ML, HTML/CSS/Bootstrap, Tableau, Pandas, Javascript

More detailed description of the ML portion (because Reema worked really hard on it):
Machine Learning: The idea was to use ML to run through the data with dates and wait times for over 5 years to predict the wait times for various rides

Date column was converted into meaningful features such as -> 'year', 'month', 'day', 'dayofweek', 'dayofyear', 'weekofyear', 'quarter','is_month_start','is_month_end','is_quarter_start'

We determined if the date was Holiday and if Yes then which holiday (New Year, Christmas, Independence day ..)? Data was scaled and divided into train and test. Features and Y were HOT encoded as needed

More than 3 different approaches were utilized for ML

 -DinsneyRides_MLFinal.ipynb->  The space ship earth with time  and Deep Neural
 - DisneyToyStorybin.ipynb -> Toy story Ride with bins for times  and Deep Neural
 - DinsneyRides_MLToyStoryMania.ipynb ->  Toy story ride with times and Deep Neural 
 - DisneyRide-PiratesOfTheCaribbean.ipynb -> Pirates of Caribbean with Random Forest
  
  Data ranges for every ride was around 200,000 to 300,000 from 2012 to 2019 

  

Random forest  with wait times as bins

Weight coefficients:  [[3.80478216e-05]]
y-axis intercept:  [10.44120957]

Deep Neural Network:  Sequential Model with 25  inputs, 2 hidden nodes, and 20 outputs run for 1000 epocs. Wait times as bins 

model.compile(optimizer='adam',
              loss='categorical_crossentropy',
              metrics=['accuracy'])

Final Result : loss: 0.9444 - acc: 0.4342

Deep Neural Network:  Sequential Model with 25  inputs, 3 hidden nodes, and 1 outputs run for 1000 epocs. Wait time as time

model.compile(optimizer="adam", loss="mean_squared_error")

model = Sequential()
model.add(Dense(units=1000, activation='relu', input_dim=25))
model.add(Dense(units=100, activation='relu'))
model.add(Dense(units=200, activation='relu'))
model.add(Dense(units=1, activation='linear'))

np.sqrt(model.evaluate(X_test, y_test))=6.4737539257165935


Predictions: Input date is scaled and all converted to have all the features as train data. Saved models were uploaded and used for predictions




