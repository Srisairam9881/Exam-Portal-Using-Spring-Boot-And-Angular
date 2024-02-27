package com.example.ExamPortal.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.ExamPortal.models.Role;

@Repository
public interface RoleRepository extends JpaRepository<Role, Long> {

}
