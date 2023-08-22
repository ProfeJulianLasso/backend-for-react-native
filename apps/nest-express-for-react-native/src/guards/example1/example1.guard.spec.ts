import { ExecutionContext } from '@nestjs/common';
import { Example1Guard } from './example1.guard';

describe('Example1Guard', () => {
  it('should be defined', () => {
    // Arrange

    // Act
    const guard = new Example1Guard();

    // Assert
    expect(guard).toBeDefined();
  });

  it('should return true', () => {
    // Arrange
    const expected = true;
    const guard = new Example1Guard();
    const mockGetRequest = jest.fn(() => ({
      url: 'http://localhost:3000/example1',
      headers: {},
      body: {},
    }));
    const mockSwitchToHttp = jest.fn(() => ({
      getRequest: mockGetRequest,
    }));

    const mockExecutionContext = {
      switchToHttp: mockSwitchToHttp,
    } as any as ExecutionContext;

    // Act
    const result = guard.canActivate(mockExecutionContext);

    // Assert
    expect(result).toEqual(expected);
    // expect(mockGetRequest).toHaveBeenCalled();
    expect(mockGetRequest).toHaveBeenCalledTimes(1);
  });
});
