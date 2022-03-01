require 'kit'

RSpec.describe Kit, '#position' do
  it "should return an integer" do
    kit = Kit.new
    expect(kit.position).to be_a Integer
  end
end


RSpec.describe Kit, '#draggable?' do
  it "should return a boolean" do
    kit = Kit.new
    expect(kit.draggable?).to eq(true || false)
  end
end

RSpec.describe Kit, '#owners' do
  it "should return an array" do
    kit = Kit.new
    expect(kit.owners).to be_a Array
  end
end
