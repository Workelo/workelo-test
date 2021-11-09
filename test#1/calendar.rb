require 'json'
require 'time'
andy_file = 'input_andy.json'
sandra_file = 'input_sandra.json'

def disponibility(andy, sandra)
  andy_calendar = JSON.parse(File.read(andy))
  sandra_calendar = JSON.parse(File.read(sandra))
  # Convert busy time in array of true or false
  available_hour = find_available_date(andy_calendar)
  # Compare the two array in one
  find_available_date(sandra_calendar).each do |key, value|
    combine_same_days(available_hour, key, value)
  end
  # Print all results
  available_hour.each do |key, v|
    v.each_with_index do |b, i|
      if b == true
        puts "Créneau disponible le #{key} de #{i+9}h à #{i+10}h"
      end
    end
  end
end

def find_available_date(calendar)
  busy = {}
  calendar.each do |person|
    # convert start and end in Time
    start_meeting = Time.parse person["start"]
    end_meeting = Time.parse person["end"]
    # find the day of the meeting
    day_of_work = start_meeting.strftime('%m/%d/%Y')
    # Declare a empty day of work start at 9 and finish at 18
    time_of_work = [true, true, true, true, true, true, true, true, true]
    # convert the hour of begin in to index of array
    index_begin = (start_meeting.strftime('%H').to_i)-9
    # convert the hour of end in to index of array
    index_end = (end_meeting.strftime('%H').to_i)-10
    # Change the empty day with the reunion
    busy_time = []
    time_of_work.each_with_index do |b, i|
      if (index_begin..index_end).include?(i)
        b = false
        busy_time << b
      else
        busy_time << b
      end
    end
    # Combine same days
    combine_same_days(busy, day_of_work, busy_time)
  end
  busy
end

def combine_same_days(hash, key, value)
  if hash[key]
    hash[key] = [hash[key], value].transpose.map {|a| a.first && a[1]}
  else
    hash[key] = value
  end
end

disponibility(andy_file, sandra_file)
