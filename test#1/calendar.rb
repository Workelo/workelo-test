require 'json'
require 'date'
require 'time'
andy_file = 'input_andy.json'
sandra_file = 'input_sandra.json'

def disponibility(andy, sandra)
  andy_calendar = JSON.parse(File.read(andy))
  andy_calendar.each do |schedule|
    time = Time.parse schedule['start']
    puts time.strftime('%m/%d/%Y')
  end
  sandra_calendar = JSON.parse(File.read(sandra))
  p sandra_calendar
end

disponibility(andy_file, sandra_file)
