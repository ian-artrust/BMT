<?php (defined('BASEPATH')) OR exit('No direct script access allowed');
/*
|---------------------------------
| Ardian Webi Kirda
| Copyright Ardian Webi Kirda
| Created By ian  18-01-2015
|---------------------------------
*/

class User_model extends CI_Model{

	public function validasi($username, $password){
		$this->db->select('id_user, username, password, level');
		$this->db->from('sys_user');
		$this->db->where('username',$username);
		$this->db->where('password',$password);
		// $this->db->limit(1);
		$query = $this->db->get();
		if($query->num_rows()==1){
			return $query->result();
		} else {
			return FALSE;
		}
	}
}