describe('Thermostat', function () {
    var thermostat;

  beforeEach(function () {
    thermostat = new Thermostat();
  });

  it('has a default temperature of 20 degrees', function () {
    expect(thermostat.temperature).toEqual(20)
  });

  it('has a default minimum temperature of 10 degrees', function () {
    expect(thermostat.MINIMUMTEMP).toEqual(10)
  });

  it('starts with powersaving mode on', function () {
    expect(thermostat.powersaver).toBe(true)
  });

  it('has a default maximum temperature of 25 degrees', function () {
    expect(thermostat.maximumtemp).toEqual(25)
  });

  it('can be turned up', function () {
    expect(thermostat.up(4)).toEqual(24)
  });

  it('can be turned down', function () {
    expect(thermostat.down(4)).toEqual(16)
  });

  it('has a minimum temperature of 10', function () {
    expect(thermostat.down(11)).toEqual('Minimum temperature is 10 degrees')
  });

  it('sets the powersaving mode to on', function () {
    thermostat.setPowersaver(true);
    expect(thermostat.powersaver).toBe(true)
  });

  it('sets the powersaving mode to off', function () {
    thermostat.setPowersaver(false);
    expect(thermostat.powersaver).toBe(false)
  });

  it('changes the default maximum temperature to 32', function () {
    thermostat.setPowersaver(false);
    expect(thermostat.maximumtemp).toEqual(32)
  });

  it('has a maximum temperature of 25 in powersaver mode', function () {
    thermostat.setPowersaver(true);
    expect(thermostat.up(6)).toEqual('Stop it, you\'re ruining the planet!');
  });

  it('has a maximum temperature of 32 degrees', function () {
    thermostat.setPowersaver(false);
    expect(thermostat.up(13)).toEqual('Stop it, you\'re ruining the planet!');
  });

  it('resets the temperature to 20', function () {
    thermostat.up(2);
    thermostat.reset();
    expect(thermostat.temperature).toEqual(20);
  });

  it('returns low-usage when temperature is below 18', function () {
    thermostat.down(3);
    expect(thermostat.usage()).toEqual('Low-usage');
  });

  it('returns medium-usage when temperature is between 18 and 24', function () {
    expect(thermostat.usage()).toEqual('Medium-usage');
  });

  it('returns high-usage when temperature is higher than 24', function () {
    thermostat.up(5);
    expect(thermostat.usage()).toEqual('High-usage');    
  });

});
