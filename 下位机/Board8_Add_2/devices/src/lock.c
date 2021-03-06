/*******************************************************
器件型号：12V电磁锁
通信方式：IO控制 与单片机的PB9引脚相连接
文件功能：
*******************************************************/

#include "lock.h"
#include "briupDelay.h"

void Lock_Init() {
	RCC->APB2ENR |= 1<<3;//使能GPIOB时钟
	GPIOB->CRH &= 0XFFFFFF0F;
	GPIOB->CRH |= 0X00000030;
}

void Lock_Open_Once() {
	GPIOB->ODR |=1<<9;
	_delay_sec(1.5);
	GPIOB->ODR &= ~(1<<9);
}
