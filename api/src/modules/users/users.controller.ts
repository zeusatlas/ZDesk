import { Controller, Get, Param } from '@nestjs/common';

@Controller('users')
export class UsersController {
  // GET /users/all
  @Get('all')
  getAll() {
    return {
      success: true,
      data: [
        { id: 1, name: 'Item One' },
        { id: 2, name: 'Item Two' },
        { id: 3, name: 'Item Three' },
      ],
    };
  }

  // GET /users/clients
  @Get('clients')
  getClients() {
    return {
      success: true,
      data: [
        { id: 1, name: 'Client A', industry: 'Finance' },
        { id: 2, name: 'Client B', industry: 'Healthcare' },
      ],
    };
  }

  // GET /users/management
  @Get('management')
  getManagement() {
    return {
      success: true,
      data: [
        { id: 1, name: 'Alice', role: 'Manager' },
        { id: 2, name: 'Bob', role: 'Director' },
      ],
    };
  }

  // GET /users/:id
  @Get(':id')
  getSingle(@Param('id') id: string) {
    return {
      success: true,
      data: {
        id: Number(id),
        name: `Item ${id}`,
        description: 'This is a single dummy item',
      },
    };
  }
}
