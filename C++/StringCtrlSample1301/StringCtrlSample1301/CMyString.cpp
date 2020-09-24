#include "CMyString.h"
#include <cstring>

CMyString::CMyString()
	:m_pszData(nullptr)
	, m_nLength(0)
{
}

CMyString::~CMyString()
{
}


int CMyString::SetString(const char* pszParam)
{
	if (pszParam == 0) {

		return 0;
	}

	m_nLength = sizeof(pszParam);
	pszParam = new char;
	strcpy(m_)


	return true;
}


const char* CMyString::GetString()
{
	// TODO: 여기에 구현 코드 추가.
	return nullptr;
}


void CMyString::Release()
{
	// TODO: 여기에 구현 코드 추가.
}
