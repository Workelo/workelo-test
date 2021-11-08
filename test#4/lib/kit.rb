class Kit
  def initialize; end

  def type
    'kit'
  end

  def id
    1
  end

  def position
    3
  end

  def icon
    'box-open'
  end

  def title
    'MacBook'
  end

  def date
    Date.new(2021, 10, 1)
  end

  def day
    -14
  end

  def week
    -2
  end

  def partial_path
    'desktop/settings/templates/elements/element'
  end

  def controller_name
    'settings/kits'
  end

  def implication
    'other'
  end

  def scope
    'actor'
  end

  def owners
    ['RH', 'Manager', 'Responsable administratif', 'Parrain']
  end

  def draggable?
    true
  end

  def editable?
    false
  end

  def environment
    'Région Sud-Ouest'
  end

  def mobility
    :crossboarding
  end
end
