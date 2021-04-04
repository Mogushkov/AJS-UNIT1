import healthStatus from '../app';

test('healthy', () => {
  const character = healthStatus({ name: 'Маг', health: 100 });
  expect(character).toBe('healthy');
});

test('healthy', () => {
  const character = healthStatus({ name: 'Маг', health: 51 });
  expect(character).toBe('healthy');
});

test('wounded', () => {
  const character = healthStatus({ name: 'Маг', health: 50 });
  expect(character).toBe('wounded');
});

test('wounded', () => {
  const character = healthStatus({ name: 'Маг', health: 15 });
  expect(character).toBe('wounded');
});

test('critical', () => {
  const character = healthStatus({ name: 'Маг', health: 14 });
  expect(character).toBe('critical');
});

test('critical', () => {
  const character = healthStatus({ name: 'Маг', health: 0 });
  expect(character).toBe('critical');
});
